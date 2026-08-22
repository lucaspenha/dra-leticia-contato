// URL canônica do site — usada em metadata, robots.txt, sitemap.xml e JSON-LD.
// TODO: pendente — confirmar o domínio definitivo com a cliente antes de publicar.
// `||` (não `??`) é proposital: cobre também o caso da env var estar setada como string vazia.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.draleticiacontato.com.br";
