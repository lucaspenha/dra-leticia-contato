"use client";

import Image from "next/image";

import { ScheduleButton } from "@/components/booking/schedule-button";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { footerContent } from "@/content/footer";
import { trackWhatsappClick } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream-50">
      <div className="mx-auto max-w-295 px-[clamp(20px,5vw,48px)] pt-20 pb-8">
        <div className="border-cream-200/20 grid gap-12 border-b pb-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={footerContent.wordmark}
              width={834}
              height={343}
              className="h-14 w-auto"
            />
            <p className="text-cream-100/65 mt-6 max-w-[370px] text-[13px] leading-6">
              {footerContent.phrase}
            </p>
            <ScheduleButton className="bg-gold-500 hover:bg-gold-300 rounded-brand-sm text-forest-900 mt-8 px-6 py-4 text-[10px] tracking-[0.16em] uppercase">
              {footerContent.scheduleLabel}
            </ScheduleButton>
          </div>

          <div>
            <p className="text-gold-300 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
              {footerContent.officesLabel}
            </p>
            <p className="text-cream-100/75 mt-5 text-[13px] leading-7">
              {siteConfig.locations.map((location) => location.label).join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-gold-300 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
              {footerContent.contactLabel}
            </p>
            <a
              href={buildWhatsappLink("footer:telefone")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick({ location: "footer" })}
              className="text-cream-100/75 hover:text-gold-300 mt-5 block text-[13px] transition-colors"
            >
              {footerContent.phoneDisplay}
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Letícia Contato"
              className="text-cream-100/75 hover:text-gold-300 mt-3 flex items-center gap-2 text-[13px] transition-colors"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </a>
          </div>
        </div>

        <div className="text-cream-100/40 mt-6 flex flex-col justify-between gap-3 pt-6 text-[10px] tracking-[0.13em] uppercase lg:flex-row">
          <span>
            © {year} {footerContent.wordmark}
          </span>
          <span>{footerContent.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
