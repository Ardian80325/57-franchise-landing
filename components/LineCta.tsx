"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

const fallbackLineUrl = "https://lin.ee/qEszn67";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type LineCtaProps = {
  children: ReactNode;
  location: string;
  className?: string;
  compact?: boolean;
  variant?: "primary" | "line" | "ghost";
};

const variantClass = {
  primary:
    "bg-gradient-to-r from-brand-cream via-gold-300 to-brand-red text-ink-950 shadow-gold hover:shadow-red",
  line: "bg-brand-green text-white shadow-line hover:bg-[#04b94e]",
  ghost:
    "border border-brand-cream/30 bg-ink-950/52 text-brand-cream shadow-[inset_0_0_0_1px_rgba(211,33,42,0.18)] backdrop-blur hover:border-gold-300/80 hover:bg-brand-cream/10"
};

export function trackLineClick(location: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  // A click is not a verified inquiry or a new LINE friend.
  // Measurement failures must never interrupt the native link.
  try {
    window.fbq("trackCustom", "LineClick", { location });
  } catch {
    // Continue directly to official LINE.
  }
}

export function LineCta({
  children,
  location,
  className = "",
  compact = false,
  variant = "primary"
}: LineCtaProps) {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL || fallbackLineUrl;

  return (
    <motion.a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLineClick(location)}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full font-black transition duration-300",
        compact ? "min-h-11 px-5 text-sm" : "min-h-14 px-7 text-base sm:text-lg",
        variantClass[variant],
        className
      ].join(" ")}
    >
      <MessageCircle className={compact ? "h-4 w-4" : "h-5 w-5"} />
      <span className="min-w-0 whitespace-nowrap">{children}</span>
      <ArrowUpRight className={compact ? "h-4 w-4" : "h-5 w-5"} />
    </motion.a>
  );
}
