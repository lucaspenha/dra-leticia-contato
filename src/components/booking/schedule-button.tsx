"use client";

import { clsx } from "clsx";
import type { ReactNode } from "react";

import { useBooking } from "@/components/booking/booking-context";

type ScheduleButtonProps = {
  children: ReactNode;
  className?: string;
};

/** Botão "Agendar conversa" que abre o `BookingModal` (ver `useBooking`). Sem estilo próprio — o chamador define aparência via `className`. */
export function ScheduleButton({ children, className }: ScheduleButtonProps) {
  const { open } = useBooking();

  return (
    <button
      type="button"
      onClick={open}
      className={clsx(
        "ease-brand inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </button>
  );
}
