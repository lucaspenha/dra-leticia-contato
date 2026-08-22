import { CtaFinal } from "@/components/sections/cta-final";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Localizacao } from "@/components/sections/localizacao";
import { MobileChapterBar, NarrativeRail } from "@/components/narrative-rail";
import { Procedimentos } from "@/components/sections/procedimentos";
import { Resultados } from "@/components/sections/resultados";
import { Sobre } from "@/components/sections/sobre";

export default function Home() {
  return (
    <>
      <NarrativeRail />
      <MobileChapterBar />
      <div className="md:pl-64 lg:pl-72">
        <Hero />
        <Procedimentos />
        <Resultados />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Localizacao />
        <Faq />
        <CtaFinal />
        <Footer />
      </div>
    </>
  );
}
