import { gallery } from "./gallery.data";
import { GalleryItem } from "./GalleryItem";

export function GalleryGrid() {
  return (
    <div className="grid auto-rows-[250px] gap-6 md:grid-cols-3">
      {gallery.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}