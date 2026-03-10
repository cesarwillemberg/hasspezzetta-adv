import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LawyerCard } from "@/components/cards/LawyerCard";

import { getLocale } from "next-intl/server";

// Using a metadata generation function for internationalization
export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `Hass & Pezzetta | ${t("team")}`,
  };
}

export default function EquipePage() {
  const tTeam = useTranslations("Team");
  const tHistory = useTranslations("History");

  return (
    <main className="flex-grow flex flex-col pt-12">
      {/* Nossa História Section */}
      <Section className="pb-16 pt-8">
        <SectionHeader 
          title={tHistory("title")} 
          subtitle={tHistory("subtitle")}
        />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed md:text-xl md:leading-10">
            {tHistory("content")}
          </p>
        </div>
      </Section>

      {/* Nossa Equipe Section */}
      <Section id="nossa-equipe" bgWhite className="py-20 border-t border-border/50 shadow-inner">
        <SectionHeader 
          title={tTeam("title")} 
          subtitle={tTeam("subtitle")}
        />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
            {tTeam("description")}
          </p>
        </div>
        
        {/* Sócios Fundadores */}
        <h3 className="text-2xl font-bold font-outfit text-primary dark:text-secondary mb-8 text-center border-b border-border pb-4 w-fit mx-auto">
          {tTeam("foundingPartners")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <LawyerCard 
            name={tTeam("partner1")}
            specialty={tTeam("p1Spec")}
            bio={tTeam("p1Bio")}
            imageUrl="/assets/imgs/equipe/foto_bernardo.avif"
            linkedin="https://linkedin.com"
          />
          <LawyerCard 
            name={tTeam("partner2")}
            specialty={tTeam("p2Spec")}
            bio={tTeam("p2Bio")}
            imageUrl="/assets/imgs/equipe/foto_diulie.avif"
            linkedin="https://linkedin.com"
          />
          <LawyerCard 
            name={tTeam("partner3")}
            specialty={tTeam("p3Spec")}
            bio={tTeam("p3Bio")}
            imageUrl="/assets/imgs/equipe/foto_jolair.avif"
            linkedin="https://linkedin.com"
          />
        </div>

        {/* Advogados Associados (Mock) */}
        {/* <h3 className="text-2xl font-bold font-outfit text-primary dark:text-secondary mb-8 text-center border-b border-border pb-4 w-fit mx-auto">
          Advogados Associados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {/* Mock associative lawyers */}
           {/* <LawyerCard 
              name="Dr. Jolair"
              specialty="Direito Tributário"
              bio="Especialista com longa atuação em demandas complexas e estratégicas."
              imageUrl="/assets/imgs/equipe/foto_jolair.avif"
            />
            <LawyerCard 
              name="Dra. Camila Rocha"
              specialty="Direito Trabalhista"
              bio="Experiência em compliance trabalhista e contencioso estratégico."
              imageUrl="/assets/imgs/hero/img_hero_bernardo_diulie.avif"
            />
            <LawyerCard 
              name="Dra. Juliana Ferreira"
              specialty="Direito de Família"
              bio="Mestre em Direito de Família, atua com sensibilidade e técnica em litígios."
              imageUrl="/assets/imgs/hero/img_hero_bernardo_diulie.avif"
            />
        </div> */}
      </Section>
    </main>
  );
}
