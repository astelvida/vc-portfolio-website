function badgeColorClass(category: string): string {
  if (category === "Framework") return "bg-thesis-gao/10 text-thesis-gao";
  if (category === "Memo") return "bg-thesis-vsrai/10 text-thesis-vsrai";
  return "bg-accent-bg text-accent";
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
      ? "bg-white/15 text-white"
      : badgeColorClass(category);

  return (
    <span
      className={`px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.04em] ${colorClasses} ${className ?? ""}`}
    >
      {category}
    </span>
  );
}
