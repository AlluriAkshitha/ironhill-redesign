import { useState } from "react";
import { X } from "lucide-react";

const images: string[] = [
  "/gallery4_files/gallery1.jpeg",
  "/gallery4_files/gallery4.png",
  "/gallery4_files/gallery2.jpeg",
  "/gallery4_files/gallery3.png",
  "/gallery4_files/gallery5.png",
  "/gallery4_files/gallery6.png",
  "/gallery4_files/gallery7.png",
  "/gallery4_files/gallery8.png",

];

export default function Gallery() {2
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-primary">Gallery</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Moments from Ironhill — cozy corners, crafted plates, and our barista's best.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <button
              key={src + idx}
              onClick={() => setSelected(src)}
              className="overflow-hidden rounded-lg p-0 focus:outline-none"
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Cafe ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-36 sm:h-40 object-cover block transform transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selected}
              alt="Selected cafe"
              className="w-full h-auto rounded-lg shadow-xl object-contain max-h-[80vh] mx-auto block"
            />
          </div>
        </div>
      )}
    </section>
  );
}
