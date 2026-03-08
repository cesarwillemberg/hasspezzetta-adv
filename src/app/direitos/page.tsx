import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFileAlt, faCalculator, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `Hass & Pezzetta | ${t("rights")}`,
  };
}

export default function DireitosPage() {
  const tRights = useTranslations("Rights");

  return (
    <main className="flex-grow flex flex-col pt-12">
      <Section bgWhite className="pb-8 pt-8 border-b border-border/30 shadow-sm relative z-10">
        <SectionHeader 
          title={tRights("title")} 
          subtitle={tRights("subtitle")}
        />
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed md:text-xl md:leading-10">
            {tRights("description")}
          </p>
        </div>
      </Section>

      {/* 1. Trabalhadores da saúde */}
      <Section className="py-16 bg-background dark:bg-black relative">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold font-outfit text-primary dark:text-secondary mb-10 pb-4 border-b border-border/60 flex items-center gap-4 text-center justify-center">
              <span className="bg-secondary/20 p-3 rounded-xl text-secondary shadow-inner">
                <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6" />
              </span>
              {tRights("health.title")}
           </h2>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
             <div className="flex flex-col gap-6 order-2 lg:order-1">
                {/* Guide */}
                <div className="bg-white dark:bg-zinc-900/80 p-8 rounded-2xl shadow-md border hover:border-secondary/50 dark:border-border transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-white leading-snug group-hover:text-secondary transition-colors">{tRights("health.guideTitle")}</h3>
                  <Button variant="secondary" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_c773f188f6c4442e9b4eb3ce62be2dc5.pdf" target="_blank" className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                  </Button>
                </div>
                {/* Table */}
                <div className="bg-white dark:bg-zinc-900/80 p-8 rounded-2xl shadow-md border hover:border-primary/50 dark:border-border transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-white leading-snug group-hover:text-primary transition-colors">{tRights("health.tableTitle")}</h3>
                  <Button variant="outline" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_b33113fbe63748aa86920c546c6e21da.pdf" target="_blank" className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                  </Button>
                </div>
             </div>
             <div className="order-1 lg:order-2 h-full">
                <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-black">
                   <iframe 
                    width="100%" 
                    height="100%"
                    src="https://www.youtube.com/embed/CiYrgHggtdM" 
                    title="Guia do TRABALHADOR DA SAÚDE: O que os hospitais não te contam sobre seus direitos" 
                    frameBorder="0" 
                    allow="
                      accelerometer; 
                      autoplay; 
                      clipboard-write; 
                      encrypted-media; 
                      gyroscope; 
                      picture-in-picture; 
                      web-share
                    " 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    ></iframe>
                </div>
             </div>
           </div>
        </div>
      </Section>

      {/* 2. Operador de Linha de Produção */}
      <Section bgWhite className="py-20 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold font-outfit text-primary dark:text-secondary mb-10 pb-4 border-b border-border/60 flex items-center gap-4 text-center justify-center">
              <span className="bg-primary/10 dark:bg-secondary/20 p-3 rounded-xl text-primary dark:text-secondary shadow-inner">
                <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6" />
              </span>
              {tRights("production.title")}
           </h2>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
             <div className="h-full">
                <div className="h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-black">
                   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z4K7tOGW3mo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
             </div>
             <div className="flex flex-col gap-6">
                {/* Guide */}
                <div className="bg-background dark:bg-zinc-900/80 p-8 rounded-2xl shadow-md border hover:border-secondary/50 dark:border-border transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-white leading-snug group-hover:text-secondary transition-colors">{tRights("production.guideTitle")}</h3>
                  <Button variant="secondary" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_68bce6ebf1ee4678babc81ea30d9d2e8.pdf" target="_blank" className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                  </Button>
                </div>
                {/* Table */}
                <div className="bg-background dark:bg-zinc-900/80 p-8 rounded-2xl shadow-md border hover:border-primary/50 dark:border-border transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary dark:text-white leading-snug group-hover:text-primary transition-colors">{tRights("production.tableTitle")}</h3>
                  <Button variant="outline" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_75aa9ba32fe34627bcd8e9d71267b5c7.pdf" target="_blank" className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                  </Button>
                </div>
             </div>
           </div>
        </div>
      </Section>

      {/* 3. Calculos */}
      <Section className="py-20 bg-background dark:bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
           <h2 className="text-2xl md:text-3xl font-bold font-outfit text-primary dark:text-secondary mb-12 pb-4 border-b border-border/60 flex items-center justify-center gap-4 text-center">
              <span className="bg-secondary/20 p-3 rounded-xl text-secondary shadow-inner">
                <FontAwesomeIcon icon={faCalculator} className="w-6 h-6" />
              </span>
              {tRights("calculations.title")}
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Saúde */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                 <h3 className="text-xl font-bold mb-8 text-primary dark:text-white min-h-[56px] flex items-center justify-center">
                    {tRights("calculations.healthTitle")}
                 </h3>
                 <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner mb-8 bg-black">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SMa0449AhrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
                 <Button variant="secondary" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_8d71ac9c102a4dbf9826968478b96e1e.xlsx?dn=Planilha%20Verbas%20Insalubridade%20(diferen%C3%A7a)%20no%20Hospital.xlsx" target="_blank" className="w-full max-w-[280px] mt-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                 </Button>
              </div>

              {/* Produção */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
                 <h3 className="text-xl font-bold mb-8 text-primary dark:text-white min-h-[56px] flex items-center justify-center">
                    {tRights("calculations.productionTitle")}
                 </h3>
                 <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner mb-8 bg-black">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tedDsBNaJYs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
                 <Button variant="secondary" href="https://1e34e892-7bb9-4e0f-9333-ad1a7c9df7ba.filesusr.com/ugd/a74ebc_c872230ee5634e5483186e01d3952fd1.xlsx?dn=Hora%20extra%20trabalhador%20de%20frigorifico%202.0.xlsx" target="_blank" className="w-full max-w-[280px] mt-auto">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" /> {tRights("download")}
                 </Button>
              </div>
           </div>
        </div>
      </Section>

      {/* 4. Formulário */}
      <Section bgWhite className="py-24 shadow-inner relative overflow-hidden border-t-4 border-secondary">
         {/* Decorative background element */}
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-primary dark:text-white mb-6 flex items-center justify-center gap-4">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-secondary" />
              {tRights("form.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              {tRights("form.desc")}
            </p>
            
            <div className="w-full h-[900px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-white dark:bg-zinc-50 relative group">
               <div className="absolute inset-0 bg-primary/5 pointer-events-none z-0"></div>
               <iframe 
                 src="https://docs.google.com/forms/d/e/1FAIpQLSe9k5euBtvuhOk1wqUjFk3D6-xbnD9PohbR90hi--8AsWhF-A/viewform?embedded=true" 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 marginHeight={0} 
                 marginWidth={0}
                 className="w-full h-full relative z-10"
               >
                 Carregando Formulário...
               </iframe>
            </div>
         </div>
      </Section>
    </main>
  );
}
