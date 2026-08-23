"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { BookingModal } from "@/components/booking/booking-modal";

type BookingContextValue = {
  open: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

/** Disponibiliza `open()` para qualquer botão "Agendar conversa" abrir o modal de agendamento. */
export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking deve ser usado dentro de <BookingProvider>");
  }
  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {isOpen ? <BookingModal onClose={close} /> : null}
    </BookingContext.Provider>
  );
}
