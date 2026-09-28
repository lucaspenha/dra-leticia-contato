import Image from "next/image";

type DoctorPhotoProps = {
  src: string;
  alt: string;
};

/** Retrato emoldurado com contorno dourado deslocado (ver Doctor). */
export function DoctorPhoto({ src, alt }: DoctorPhotoProps) {
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
    </div>
  );
}
