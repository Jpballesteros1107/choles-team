import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary";
}

export function Badge({
  color = "secondary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        color === "primary"
          ? "bg-primary text-white"
          : "bg-secondary text-white",
        className
      )}
      {...props}
    />
  );
}