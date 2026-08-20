import Image from "next/image";

type AboutBadgeProps = {
  name: string;
  role: string;
};

/** Badge glass sobre a foto (nome + especialidade) — ver `.about__badge`. */
export function AboutBadge({ name, role }: AboutBadgeProps) {
  return (
    <div className="rounded-brand-sm bg-forest-900/55 text-cream-50 absolute inset-x-4 bottom-4 px-5 py-4 backdrop-blur-md">
      <p className="font-display text-lg font-semibold">{name}</p>
      <p className="text-cream-100/85 text-sm">{role}</p>
    </div>
  );
}

export function AboutPhoto({
  src,
  alt,
  badge,
}: {
  src: string;
  alt: string;
  badge: AboutBadgeProps;
}) {
  return (
    <div className="rounded-brand shadow-soft relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={860}
        sizes="(min-width: 900px) 45vw, 100vw"
        className="aspect-[5/6] w-full object-cover"
      />
      <AboutBadge {...badge} />
    </div>
  );
}
