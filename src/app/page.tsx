import { Abordagem } from "@/components/sections/abordagem";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Doutora } from "@/components/sections/doutora";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Localizacao } from "@/components/sections/localizacao";
import { Resultados } from "@/components/sections/resultados";
import { Tratamentos } from "@/components/sections/tratamentos";

export default function Home() {
  return (
    <>
      <Hero />
      <Abordagem />
      <Tratamentos />
      <Doutora />
      <Resultados />
      <Depoimentos />
      <Localizacao />
      <Faq />
      <Footer />
    </>
  );
}
