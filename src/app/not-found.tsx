import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-cream-50 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
        Página não encontrada
      </p>
      <h1 className="font-display text-forest-700 text-4xl leading-none font-semibold sm:text-5xl">
        Vamos voltar
        <br />
        <em className="italic">ao cuidado?</em>
      </h1>
      <p className="text-ink-500 max-w-xs text-sm leading-6">
        O endereço que você tentou acessar não existe, mas seu momento de se cuidar pode começar
        agora.
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
