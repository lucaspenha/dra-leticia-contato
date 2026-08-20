"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-cream-50 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-forest-900 text-3xl font-semibold">Algo deu errado.</h1>
      <p className="text-ink-500 max-w-md">
        Não foi possível carregar esta página. Tente novamente em instantes.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-green-grad text-cream-50 shadow-soft ease-brand inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
      >
        Tentar novamente
      </button>
    </main>
  );
}
