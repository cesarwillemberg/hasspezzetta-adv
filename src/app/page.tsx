import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { Button } from "@/components/ui/Button";
import { 
  faScaleBalanced, 
  faBriefcase, 
  faBuilding 
} from "@fortawesome/free-solid-svg-icons";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return {
    title: `Hass & Pezzetta | ${t("heroTitle")}`,
  };
}

import { getLocale } from "next-intl/server";

export default function Home() {
  const tHome = useTranslations("HomePage");
  const tAbout = useTranslations("About");
  const tServices = useTranslations("Services");
  const tTeam = useTranslations("Team");

  // Calculate dynamic years of experience from March 26, 2024
  const calcExperience = () => {
    const start = new Date(2024, 2, 26); // Month is 0-indexed (2 = March)
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) {
      years--;
    }
    return Math.max(1, years); // Ensure at least 1 year is shown
  };
  const expYears = calcExperience();

  return (
    <main className="flex-grow flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full py-32 md:py-48 lg:py-64 flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/assets/imgs/hero/img_hero_bernardo_diulie.avif')] bg-cover bg-top brightness-[0.3]"></div>
        <div className="law-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-outfit uppercase tracking-wider backdrop-blur-sm max-w-5xl mx-auto">
            {tHome("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light drop-shadow-md">
            {tHome("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button size="lg" variant="secondary" href="/contato">
               {tHome("ctaConsult")}
             </Button>
             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 dark:hover:bg-white/10 dark:text-white dark:border-white" href="#sobre">
               {tHome("ctaLearnMore")}
             </Button>
          </div>
        </div>
      </section>
      
      {/* ABOUT SECTION */}
      <Section id="sobre" bgWhite>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-primary dark:text-white mb-4">
              {tAbout("title")}
            </h2>
            <h3 className="text-xl text-secondary font-medium mb-6 uppercase tracking-wide">
              {tAbout("subtitle")}
            </h3>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed mb-8">
              {tAbout("description")}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-secondary pl-4">
                <span className="block text-3xl font-bold text-primary dark:text-white mb-1">+{expYears}</span>
                <span className="text-sm font-medium text-muted-foreground dark:text-gray-400 uppercase tracking-wide">Anos de Experiência</span>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <span className="block text-3xl font-bold text-primary dark:text-white mb-1">+5k</span>
                <span className="text-sm font-medium text-muted-foreground dark:text-gray-400 uppercase tracking-wide">Casos de Sucesso</span>
              </div>
            </div>
            <Button variant="primary" href="/equipe">Conheça nossa História</Button>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('/assets/imgs/hero/img_hero_bernardo_diulie.avif')] bg-cover bg-center"></div>
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
        </div>
      </Section>

      {/* SERVICES SUMMARY SECTION */}
      <Section id="servicos">
         <SectionHeader 
           title={tServices("title")} 
           subtitle={tServices("subtitle")}
         />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title={tServices("labor")}
              description={tServices("laborDesc")}
              icon={faScaleBalanced}
            />
            <ServiceCard 
              title={tServices("industrial")}
              description={tServices("industrialDesc")}
              icon={faBuilding}
            />
            <ServiceCard 
              title={tServices("compliance")}
              description={tServices("complianceDesc")}
              icon={faBriefcase}
            />
         </div>
         <div className="text-center">
            <Button variant="outline" href="/servicos">Ver todos os serviços</Button>
         </div>
      </Section>

      {/* TEAM HIGHLIGHT SECTION */}
      <Section id="equipe" bgWhite>
         <SectionHeader 
           title={tTeam("title")} 
           subtitle={tTeam("subtitle")}
         />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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
         <div className="text-center">
            <Button variant="primary" href="/equipe">Conheça toda a equipe</Button>
         </div>
      </Section>

      {/* CONTACT CTA SECTION */}
      <section className="py-20 bg-secondary text-primary dark:bg-black/80 dark:border-t dark:border-border">
        <div className="law-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6 dark:text-white">Pronto para resolver suas questões jurídicas?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium dark:text-gray-300">Agende uma consulta com nossos especialistas e descubra como podemos proteger seus interesses.</p>
          <Button variant="primary" size="lg" href="/contato" className="bg-primary text-white hover:bg-primary/90 dark:bg-secondary dark:text-black dark:hover:bg-opacity-90">
            Falar com um especialista
          </Button>
        </div>
      </section>
    </main>
  );
}
