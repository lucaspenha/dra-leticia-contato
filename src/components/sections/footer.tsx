import { InstagramIcon } from "@/components/icons/instagram-icon";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { footerContent } from "@/content/footer";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,48px)] py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-cream-50 text-2xl font-semibold">
              {footerContent.wordmark}
            </p>
            <p className="text-gold-300 mt-1 text-sm">{footerContent.tagline}</p>
            <p className="text-cream-100/80 mt-4 text-sm">{footerContent.phrase}</p>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Letícia Contato"
              className="text-cream-100/80 hover:text-gold-300 mt-4 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <InstagramIcon className="h-5 w-5" />
              Instagram
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerContent.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream-100/80 hover:text-cream-50 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Unidades
            </p>
            <ul className="text-cream-100/80 mt-4 flex flex-col gap-3 text-sm">
              {siteConfig.locations.map((location) => (
                <li key={location.id}>
                  <p className="text-cream-50 font-semibold">{location.label}</p>
                  <p>{location.address}</p>
                </li>
              ))}
            </ul>
            <WhatsAppButton
              context={footerContent.whatsappContext}
              location="footer"
              variant="green"
              size="sm"
              className="mt-4"
            >
              {footerContent.whatsappLabel}
            </WhatsAppButton>
          </div>
        </div>

        <div className="border-forest-line text-cream-100/60 mt-12 border-t pt-6 text-center text-xs">
          © {year} {footerContent.wordmark} · Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
