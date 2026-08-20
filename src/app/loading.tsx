export default function Loading() {
  return (
    <main className="bg-cream-50 flex min-h-screen items-center justify-center">
      <span
        aria-label="Carregando"
        role="status"
        className="border-cream-200 border-t-forest-700 h-10 w-10 animate-spin rounded-full border-4"
      />
    </main>
  );
}
