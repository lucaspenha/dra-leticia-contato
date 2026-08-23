"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { type FormEvent, useState } from "react";

import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { trackWhatsappClick } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function BookingModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState(siteConfig.locations[0]?.label ?? "");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div
      className="bg-forest-900/70 fixed inset-0 z-50 flex items-end justify-center p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="rounded-brand text-forest-700 bg-cream-50 relative w-full max-w-[520px] p-7 shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="text-forest-700/60 hover:text-forest-700 absolute top-5 right-5"
        >
          <X size={19} />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <div className="bg-gold-300 text-forest-700 mx-auto flex h-14 w-14 items-center justify-center rounded-full">
              <Check size={23} />
            </div>
            <h2 id="booking-title" className="font-display mt-6 text-4xl">
              Obrigada, {name || "querida"}.
            </h2>
            <p className="text-ink-500 mx-auto mt-4 max-w-[320px] text-sm leading-6">
              Agora é só clicar abaixo para continuar nossa conversa pelo WhatsApp.
            </p>
            <a
              href={buildWhatsappLink("booking-modal:continuar")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick({ location: "booking-modal", context: city })}
              className="bg-wa-green hover:bg-wa-green-d text-cream-50 mt-7 inline-flex items-center gap-3 rounded-full px-6 py-4 text-[10px] font-bold tracking-[0.15em] uppercase"
            >
              <WhatsappIcon className="h-4 w-4" /> Abrir WhatsApp
            </a>
          </div>
        ) : (
          <>
            <p className="text-gold-600 text-xs font-semibold tracking-[0.22em] uppercase">
              Vamos conversar
            </p>
            <h2 id="booking-title" className="font-display mt-4 text-4xl leading-none">
              Seu cuidado começa
              <br />
              <em className="text-gold-600 italic">com uma conversa.</em>
            </h2>
            <p className="text-ink-500 mt-5 text-sm leading-6">
              Deixe seus dados e retornaremos pelo WhatsApp para encontrar o melhor momento para
              você.
            </p>
            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <label className="block">
                <span className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
                  Seu nome
                </span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Como podemos chamar você?"
                  className="border-forest-700/30 focus:border-gold-600 mt-2 w-full rounded-none border-b bg-transparent px-0 py-3 text-sm outline-none"
                />
              </label>
              <label className="block">
                <span className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
                  Onde prefere ser atendida?
                </span>
                <select
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="border-forest-700/30 mt-2 w-full rounded-none border-b bg-transparent px-0 py-3 text-sm outline-none"
                >
                  {siteConfig.locations.map((location) => (
                    <option key={location.id}>{location.label}</option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="bg-forest-700 hover:bg-forest-900 rounded-brand-sm text-cream-50 mt-3 flex w-full items-center justify-between px-5 py-4 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors"
              >
                Continuar pelo WhatsApp <ArrowRight size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
