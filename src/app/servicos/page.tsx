import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { 
  faScaleBalanced, 
  faBriefcase, 
  faBuilding, 
  faFileInvoiceDollar, 
  faGavel,
  faHandHoldingDollar
} from "@fortawesome/free-solid-svg-icons";

import { getLocale } from "next-intl/server";

// Metadata for SEO
export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `Hass & Pezzetta | ${t("services")}`,
  };
}

export default function ServicosPage() {
  const tServices = useTranslations("Services");

  return (
    <main className="flex-grow flex flex-col pt-12">
      <Section bgWhite>
        <SectionHeader 
          title={tServices("title")} 
          subtitle={tServices("subtitle")}
        />
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
            Nossa atuação abrange diversas áreas do Direito, oferecendo soluções personalizadas para cada necessidade. Com dedicação e excelência, nossa equipe atua tanto de forma preventiva quanto contenciosa, visando sempre a segurança jurídica e resultados pragmáticos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            title={tServices("labor")}
            description={tServices("laborDesc")}
            icon={faBriefcase}
          />
          <ServiceCard 
            title={tServices("industrial")}
            description={tServices("industrialDesc")}
            icon={faBuilding}
          />
          <ServiceCard 
            title={tServices("compliance")}
            description={tServices("complianceDesc")}
            icon={faScaleBalanced}
          />
          <ServiceCard 
            title={tServices("calculations")}
            description={tServices("calculationsDesc")}
            icon={faFileInvoiceDollar}
          />
          <ServiceCard 
            title={tServices("health")}
            description={tServices("healthDesc")}
            icon={faHandHoldingDollar}
          />
          <ServiceCard 
            title={tServices("litigation")}
            description={tServices("litigationDesc")}
            icon={faGavel}
          />
        </div>
      </Section>
    </main>
  );
}
