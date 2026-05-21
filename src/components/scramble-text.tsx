"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}=+*·";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

/**
 * Decodes `text` from a scrambled glyph stream on mount. The final string is
 * rendered server-side and announced via aria-label, so crawlers and reduced-
 * motion users always get correct, stable content.
 */
export function ScrambleText({
  text,
  className = "",
  duration = 800,
  delay = 0,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const animated = useRef(false);

  useEffect(() => {
    if (animated.current) return;
    animated.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setDisplay(text);
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, duration, delay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
