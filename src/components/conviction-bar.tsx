"use client";

import { useEffect, useState } from "react";

interface ConvictionBarProps {
  percentage: number;
  color: string;
  delay?: number;
}

export function ConvictionBar({
  percentage,
  color,
  delay = 0,
}: ConvictionBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    return () => clearTimeout(timeout);
  }, [percentage, delay]);

  return (
    <div className="h-1.5 w-full rounded-full bg-border-subtle">
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: `width 1200ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      />
    </div>
  );
}
