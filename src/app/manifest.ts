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
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
