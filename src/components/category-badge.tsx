function badgeColorClass(category: string): string {
  if (category === "Framework") return "bg-thesis-cai/8 text-thesis-cai";
  if (category === "Memo") return "bg-thesis-inf/8 text-thesis-inf";
  return "bg-thesis-vai/8 text-thesis-vai";
}

export function CategoryBadge({
  category,
  className,
  variant = "default",
}: {
  category: string;
  className?: string;
  variant?: "default" | "overlay";
}) {
  const colorClasses =
    variant === "overlay"
      ? "bg-white/15 text-white backdrop-blur-sm"
      : badgeColorClass(category);

  return (
    <span
      className={`rounded px-2 py-0.5 font-mono text-[10px] font-semibold ${colorClasses} ${className ?? ""}`}
    >
      {category}
    </span>
  );
}
