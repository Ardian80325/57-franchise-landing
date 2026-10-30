"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { trackSiteEvent, type SiteEvent } from "@/lib/analytics";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
const siteHost = "57-franchise-landing.vercel.app";

export function SiteTracking() {
  const sent = useRef(new Set<SiteEvent>());
  useEffect(() => {
    const stop = document.querySelector<HTMLButtonElement>("[data-analytics-stop]");
    const start = document.querySelector<HTMLButtonElement>("[data-analytics-start]");
    const choose = (value: string) => {
      try { localStorage.setItem("franchise-analytics-v1", value); } catch { /* Choice still applies on reload where supported. */ }
      window.location.reload();
    };
    const deny = () => choose("denied");
    const allow = () => choose("enabled");
    stop?.addEventListener("click", deny);
    start?.addEventListener("click", allow);
    let denied = false;
    try { denied = localStorage.getItem("franchise-analytics-v1") === "denied"; } catch { /* Default on. */ }
    const status = document.querySelector("[data-analytics-status]");
    if (status) status.textContent = denied ? "目前已停用網站分析。" : "目前已啟用網站分析。";

    let last = performance.now();
    let activeMs = 0;
    const canRead = location.hostname === siteHost && location.pathname === "/" && !denied;
    const timer = canRead ? window.setInterval(() => {
      const now = performance.now();
      const elapsed = Math.min(2000, Math.max(0, now - last));
      last = now;
      if (document.visibilityState !== "visible" || !document.hasFocus()) return;
      activeMs += elapsed;
      const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, 1);
      const depth = Math.min(1, (window.scrollY + window.innerHeight) / height);
      const fire = (name: SiteEvent) => {
        if (sent.current.has(name)) return;
        sent.current.add(name);
        trackSiteEvent(name, { active_seconds: Math.floor(activeMs / 1000), scroll_percent: Math.round(depth * 100) });
      };
      if (activeMs >= 30000 && depth >= .5) fire("engaged_visit");
      if (activeMs >= 60000 && depth >= .9) fire("complete_page_view");
    }, 1000) : undefined;
    return () => {
      if (timer) window.clearInterval(timer);
      stop?.removeEventListener("click", deny);
      start?.removeEventListener("click", allow);
    };
  }, []);

  if (!/^GTM-[A-Z0-9]+$/.test(gtmId)) return null;
  return <Script id="franchise-gtm" strategy="afterInteractive">{`
    (function(w,d,s,l,i){
      if(w.location.hostname!==${JSON.stringify(siteHost)})return;
      try{if(w.localStorage.getItem('franchise-analytics-v1')==='denied')return;}catch(e){}
      w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
  `}</Script>;
}
