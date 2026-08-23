"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { ScheduleButton } from "@/components/booking/schedule-button";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  ["A abordagem", "#abordagem"],
  ["Tratamentos", "#tratamentos"],
  ["Resultados", "#resultados"],
  ["A Dra. Letícia", "#dra-leticia"],
] as const;

/** Cabeçalho absoluto sobre o Hero, com menu mobile e CTA de agendamento. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-295 items-center justify-between px-6 py-6 lg:px-10">
        <a href="#inicio" aria-label="Dra. Letícia Contato — página inicial" className="text-left">
          <Image
            src="/images/logo.png"
            alt="Dra. Letícia Contato — Odontologia e Harmonização Facial"
            width={834}
            height={343}
            priority
            unoptimized
            className="h-20 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="ease-brand text-cream-50/80 hover:text-gold-300 text-[11px] font-medium tracking-[0.1em] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="ease-brand text-cream-50/70 hover:text-gold-300 transition-colors"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <ScheduleButton className="rounded-brand-sm border-gold-500/60 hover:border-gold-300 hover:bg-gold-500 hover:text-forest-900 text-cream-50 border px-5 py-3 text-[10px] tracking-[0.18em] uppercase">
            Agendar conversa
          </ScheduleButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="text-cream-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-gold-300/25 bg-forest-900 mx-4 border p-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Menu móvel">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-cream-50/15 text-cream-50 border-b pb-4 text-left text-sm"
              >
                {label}
              </a>
            ))}
            <ScheduleButton className="rounded-brand-sm bg-gold-500 text-forest-900 justify-between px-4 py-3 text-[10px] tracking-[0.16em] uppercase">
              Agendar conversa
            </ScheduleButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
