interface HeroBadgeProps {
  children: React.ReactNode;
}

export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <span className="
      inline-flex
      items-center
      rounded-full
      border
      border-secondary/40
      bg-secondary/15
      px-5
      py-2
      text-sm
      font-semibold
      uppercase
      tracking-[0.25em]
      text-secondary
    ">
      {children}
    </span>
  );
}