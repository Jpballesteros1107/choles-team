import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-border shadow-md transition-all duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    />
  );
}