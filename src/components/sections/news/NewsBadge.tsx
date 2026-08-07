interface Props {
  category: string;
}

export function NewsBadge({ category }: Props) {
  return (
    <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
      {category}
    </span>
  );
}