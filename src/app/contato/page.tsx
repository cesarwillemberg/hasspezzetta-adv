import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Metadata for SEO
export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Navigation" });
  return {
    title: `Hass & Pezzetta | ${t("contact")}`,
  };
}

export default function ContatoPage() {
  const tContact = useTranslations("Contact");

  return (
    <main className="flex-grow flex flex-col pt-12">
      <Section bgWhite>
        <SectionHeader 
          title={tContact("title")} 
          subtitle={tContact("subtitle")}
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground dark:text-gray-300">
            {tContact("description")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <form className="bg-background dark:bg-black/40 border border-border rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                  {tContact("formName")}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                  {tContact("formEmail")}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                {tContact("formSubject")}
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                {tContact("formMessage")}
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white resize-y"
                placeholder="Detalhe o seu caso..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full justify-center">
              {tContact("formSubmit")}
            </Button>
          </form>
        </div>

        {/* Divider text: OU ENTRE EM CONTATO POR */}
        <div className="flex items-center justify-center max-w-4xl mx-auto mb-16">
          <div className="flex-grow border-t border-border"></div>
          <span className="px-6 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {tContact("orContactVia")}
          </span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        {/* Other Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {/* Email */}
          <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-[#111] border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </div>
            <h4 className="font-outfit font-bold text-lg mb-2 dark:text-white">{tContact("emailTitle")}</h4>
            <a href="mailto:hasspezzettaadv@gmail.com" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors">
              hasspezzettaadv@gmail.com
            </a>
          </div>

          {/* Phone / Whatsapp */}
          <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-[#111] border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
            </div>
            <h4 className="font-outfit font-bold text-lg mb-2 dark:text-white">{tContact("phoneTitle")}</h4>
            <a href="https://wa.me/message/ZTCJQAWF5IF5I1" target="_blank" rel="noreferrer" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors mb-1 block">
              WhatsApp
            </a>
            <a href="tel:+555539400016" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors block">
              +55 (55) 3940-0016
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center p-6 rounded-xl bg-background dark:bg-[#111] border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
            </div>
            <h4 className="font-outfit font-bold text-lg mb-2 dark:text-white">{tContact("addressTitle")}</h4>
            <address className="not-italic text-muted-foreground dark:text-gray-400 leading-relaxed">
              Rua 14 de Julho 149 - Centro<br />
              Ijuí - RS, Brasil<br />
              Edifício Jamile - sala 405, 4º andar.
            </address>
          </div>
        </div>

      </Section>
    </main>
  );
}
