"use client";

const TICKER_DATA = [
  "TORTUS AI 82 · VAI · London",
  "Deeploy 80 · CAI · Amsterdam",
  "Alinia 79 · CAI · London",
  "REMATIQ 77 · VAI · Berlin",
  "Holistic AI 74 · CAI · London",
  "Synthesia 71 · VAI · London",
  "Parloa 69 · VAI · Berlin",
  "Cradle 67 · INF · Amsterdam",
  "Dust 65 · INF · Paris",
  "Lakera 63 · CAI · Zurich",
];

export function Ticker() {
  const content = TICKER_DATA.join("  —  ");

  return (
    <div className="w-full overflow-hidden border-y border-border bg-surface py-2.5">
      <div
        className="flex whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.06em] text-text-muted"
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
