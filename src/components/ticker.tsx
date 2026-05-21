"use client";

const TICKER_DATA = [
  "TORTUS AI 82 · VSRAI · London",
  "Deeploy 80 · GAO · Amsterdam",
  "Alinia 79 · GAO · London",
  "Holistic AI 78 · GAO · London",
  "REMATIQ 77 · VSRAI · Berlin",
  "Lakera 75 · GAO · Zurich",
  "QuantPi 72 · GAO · Berlin",
  "Legora · VSRAI · Stockholm",
  "Shift Technology · VSRAI · Paris",
  "Geordie · GAO · London",
];

interface TickerProps {
  variant?: "light" | "dark";
}

export function Ticker({ variant = "light" }: TickerProps) {
  const content = TICKER_DATA.join("  —  ");
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
        className={`flex whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.06em] ${
          isDark ? "text-white/25" : "text-text-muted"
        }`}
        style={{
          animation: "ticker-scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        <span className="px-4">{content}</span>
        <span className="px-4">{content}</span>
      </div>
    </div>
  );
}
