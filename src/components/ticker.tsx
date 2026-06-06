"use client";

import { SIGNALS } from "@/data/signals";

interface TickerProps {
  variant?: "light" | "dark";
}

export function Ticker({ variant = "light" }: TickerProps) {
  const content = SIGNALS.map(
    (s) => `${s.company} · SSI ${s.ssi} · ${s.thesis} · ${s.hq}`
  ).join("    —    ");
  const isDark = variant === "dark";

  return (
    <div
      className={`w-full overflow-hidden py-2.5 ${
        isDark
          ? "border-y border-white/[0.06] bg-transparent"
          : "border-y border-border bg-surface"
      }`}
    >
      <div
        className={`flex w-max whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.06em] ${
          isDark ? "text-white/30" : "text-text-muted"
        }`}
        style={{ animation: "ticker-scroll 38s linear infinite" }}
      >
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
      </div>
    </div>
  );
}
