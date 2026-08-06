"use client";

import { cn } from "@/lib/utils";
import { CategoryGender } from "./category.types";

interface Props {
  gender: CategoryGender;
}

const styles: Record<CategoryGender, string> = {
  Mixto: "bg-violet-100 text-violet-700",
  Masculino: "bg-blue-100 text-blue-700",
  Femenino: "bg-pink-100 text-pink-700",
  Libre: "bg-green-100 text-green-700",
};

export function CategoryBadge({ gender }: Props) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
        styles[gender]
      )}
    >
      {gender}
    </span>
  );
}