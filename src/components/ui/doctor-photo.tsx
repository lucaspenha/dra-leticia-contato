import Image from "next/image";

type DoctorPhotoProps = {
  src: string;
  alt: string;
  caption: { line1: string; line2: string };
};

/** Retrato emoldurado com contorno dourado deslocado e legenda sólida no canto (ver Doctor). */
export function DoctorPhoto({ src, alt, caption }: DoctorPhotoProps) {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div
        aria-hidden
        className="border-gold-500/70 absolute -top-5 -right-4 h-full w-full border"
      />
      <div className="rounded-brand shadow-soft relative aspect-4/5 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 900px) 40vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="bg-forest-700 text-cream-50 absolute -bottom-5 -left-4 px-5 py-4">
        <p className="font-display text-lg italic">{caption.line1}</p>
        <p className="text-gold-300 mt-1 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
          {caption.line2}
        </p>
      </div>
    </div>
  );
}
