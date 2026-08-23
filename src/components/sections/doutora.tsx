import { DoctorPhoto } from "@/components/ui/doctor-photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { doctorSection } from "@/content/doctor";

export function Doutora() {
  return (
    <Section id="dra-leticia" className="bg-cream-50 overflow-hidden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal className="lg:order-2">
          <DoctorPhoto
            src={doctorSection.photo.src}
            alt={doctorSection.photo.alt}
            caption={doctorSection.photo.caption}
          />
        </Reveal>

        <Reveal delay={80} className="lg:order-1">
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {doctorSection.eyebrow}
          </p>
          <h2 className="font-display text-forest-700 mt-6 text-[clamp(2.8rem,5vw,5rem)] leading-[.98] tracking-[-0.05em]">
            {doctorSection.title}
            <br />
            <em className="italic">{doctorSection.titleEmphasis}</em>
          </h2>

          {doctorSection.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-ink-500 max-w-[450px] text-sm leading-7 ${index === 0 ? "mt-8" : "mt-5"}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="border-forest-700/20 mt-10 grid max-w-[470px] grid-cols-2 gap-5 border-t pt-5">
            {doctorSection.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-forest-700 text-3xl">{stat.value}</div>
                <p className="text-gold-600 mt-1 text-[10px] tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
