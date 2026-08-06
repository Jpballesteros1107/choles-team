import Image from "next/image";

import { GalleryImage } from "./gallery.types";

interface Props {
  item: GalleryImage;
}

export function GalleryItem({ item }: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${
        item.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative ${
          item.featured ? "h-[520px]" : "h-64"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <h3 className="font-heading text-3xl uppercase text-white">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}