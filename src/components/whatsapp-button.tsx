"use client";

import type { ReactNode } from "react";

import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { trackWhatsappClick } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  context?: string;
  location: string;
  variant?: "gold" | "green" | "forest" | "ghost";
  size?: "sm" | "lg" | "xl";
  showIcon?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * CTA padrão de WhatsApp: monta o link via `buildWhatsappLink`, dispara o
 * evento de conversão (GA4/Meta Pixel) no clique e abre em nova aba com
 * `rel="noopener noreferrer"`.
 */
export function WhatsAppButton({
  context,
  location,
  variant = "gold",
  size = "lg",
  showIcon = true,
  className,
  children,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsappLink(context)}
      variant={variant}
      size={size}
      className={className}
      icon={showIcon ? <WhatsappIcon className="h-5 w-5" /> : undefined}
      onClick={() => trackWhatsappClick({ location, context })}
    >
      {children}
    </Button>
  );
}
