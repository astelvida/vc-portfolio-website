import type { ReactNode } from "react";

interface TerminalFrameProps {
  title?: string;
  meta?: string;
  variant?: "paper" | "ink";
  className?: string;
  children: ReactNode;
}

/**
 * Box-framed panel with a terminal-style title bar. Hard borders, no radius —
 * the structural unit of the data-room layer.
 */
export function TerminalFrame({
  title,
  meta,
  variant = "paper",
  className = "",
  children,
}: TerminalFrameProps) {
  const ink = variant === "ink";

  return (
    <div
      className={`border ${
        ink ? "border-ink-border bg-ink-raised" : "border-border bg-surface"
      } ${className}`}
    >
      {title ? (
        <div
          className={`flex items-center justify-between gap-3 border-b px-3.5 py-2 ${
            ink ? "border-ink-border" : "border-border"
          }`}
        >
          <span
            className={`font-mono text-[10px] font-semibold tracking-[0.16em] ${
              ink ? "text-white/55" : "text-text-muted"
            }`}
          >
            {title}
          </span>
          <div className="flex items-center gap-3">
            {meta ? (
              <span
                className={`font-mono text-[9px] tracking-[0.12em] ${
                  ink ? "text-white/30" : "text-text-faint"
                }`}
              >
                {meta}
              </span>
            ) : null}
            <span aria-hidden="true" className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  ink ? "bg-white/20" : "bg-border-hover"
                }`}
              />
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  ink ? "bg-white/20" : "bg-border-hover"
                }`}
              />
            </span>
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}
