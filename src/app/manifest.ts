import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dra. Letícia Contato — Odontologia e Harmonização Facial",
    short_name: "Dra. Letícia Contato",
    description:
      "Botox, preenchimentos, bioestimuladores de colágeno e skinbooster com a Dra. Letícia Contato.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F3",
    theme_color: "#03422F",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
