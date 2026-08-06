interface Props {
  role: string;
}

export function CoachBadge({ role }: Props) {
  return (
    <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
      {role}
    </span>
  );
}