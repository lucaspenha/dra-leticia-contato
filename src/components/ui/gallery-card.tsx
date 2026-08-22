import { clsx } from "clsx";
import Image from "next/image";

type GalleryCardProps = {
  title: string;
  label: string;
  image: { src: string; alt: string };
  pair?: { src: string; alt: string };
  aspectClassName?: string;
};

/** Card de galeria antes/depois com selo glass no rodapé (ver `.gcard`). */
export function GalleryCard({
  title,
  label,
  image,
  pair,
  aspectClassName = "aspect-square",
}: GalleryCardProps) {
  return (
    <figure className="group rounded-brand shadow-soft relative overflow-hidden">
      <div className={pair ? "grid grid-cols-2" : undefined}>
        <Image
          src={image.src}
          alt={image.alt}
          width={480}
          height={480}
          sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
          className={clsx("w-full object-cover", aspectClassName)}
        />
        {pair ? (
          <Image
            src={pair.src}
            alt={pair.alt}
            width={480}
            height={480}
            sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
            className={clsx("w-full object-cover", aspectClassName)}
          />
        ) : null}
      </div>
      <figcaption className="bg-forest-900/55 text-cream-50 absolute inset-x-3 bottom-3 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md">
        {title}
        <span className="text-cream-100/80 ml-2 font-normal">{label}</span>
      </figcaption>
    </figure>
  );
}
