interface AsciiDividerProps {
  label?: string;
  className?: string;
  variant?: "paper" | "ink";
}

/**
 * A hard horizontal rule framed with box-drawing glyphs and an optional
 * monospace label — section punctuation for the terminal layer.
 */
export function AsciiDivider({
  label,
  className = "",
  variant = "paper",
}: AsciiDividerProps) {
  const ink = variant === "ink";
  const rule = ink ? "text-white/15" : "text-text-faint";
  const text = ink ? "text-white/45" : "text-text-muted";

  return (
    <div
      aria-hidden="true"
      className={`flex select-none items-center gap-3 font-mono text-[10px] ${className}`}
    >
      <span className={rule}>+</span>
      <span className={`flex-1 overflow-hidden whitespace-nowrap ${rule}`}>
        {"─".repeat(240)}
      </span>
      {label ? (
        <>
          <span className={`shrink-0 tracking-[0.22em] ${text}`}>{label}</span>
          <span className={`flex-1 overflow-hidden whitespace-nowrap ${rule}`}>
            {"─".repeat(240)}
          </span>
        </>
      ) : null}
      <span className={rule}>+</span>
    </div>
  );
}
