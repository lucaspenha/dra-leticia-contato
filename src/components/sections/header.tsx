import Image from "next/image";

/** Barra de topo com a logo — site é one-page, sem navegação (ver seção 5 do doc de spec). */
export function SiteHeader() {
  return (
    <header className="bg-forest-900 flex justify-center py-4">
      <a href="#inicio" aria-label="Dra. Letícia Contato — página inicial">
        <Image
          src="/images/logo.png"
          alt="Dra. Letícia Contato — Odontologia & Harmonização Facial"
          width={834}
          height={343}
          className="h-12 w-auto sm:h-14"
        />
      </a>
    </header>
  );
}
