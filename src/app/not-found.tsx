import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-cream-50 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-forest-700 text-6xl font-semibold italic">404</p>
      <h1 className="font-display text-forest-900 text-3xl font-semibold">
        Página não encontrada.
      </h1>
      <p className="text-ink-500 max-w-md">
        O endereço que você tentou acessar não existe ou foi movido. Volte para a página inicial.
      </p>
      <Link
        href="/"
        className="bg-green-grad text-cream-50 shadow-soft ease-brand inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold transition-transform duration-300 hover:-translate-y-0.5"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
