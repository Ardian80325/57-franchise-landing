export type SiteEvent = "line_click" | "engaged_visit" | "complete_page_view";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackSiteEvent(name: SiteEvent, context: {
  button_location?: string;
  active_seconds?: number;
  scroll_percent?: number;
} = {}) {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem("franchise-analytics-v1") === "denied") return;
  } catch { /* Default analytics does not require local storage. */ }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    event_context: {
      button_location: context.button_location || "",
      active_seconds: context.active_seconds || 0,
      scroll_percent: context.scroll_percent || 0
    }
  });
}
