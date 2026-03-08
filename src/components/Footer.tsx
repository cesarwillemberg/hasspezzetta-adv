"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const t = useTranslations("Navigation");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white dark:bg-black border-t border-border pt-16 pb-8">
      <div className="law-container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg p-1">
              <img 
                src="/assets/imgs/logo/logo.avif" 
                alt="Hass & Pezzetta Logo" 
                className="w-full h-full object-contain invert brightness-0 grayscale opacity-90" 
              />
            </div>
            <div>
              <h2 className="font-outfit font-bold text-lg uppercase tracking-widest text-white">
                Hass & Pezzetta
              </h2>
              <p className="font-inter text-xs tracking-widest text-white/70 uppercase">
                Advocacia
              </p>
            </div>
          </Link>
          <p className="text-white/80 text-sm mb-6 max-w-sm">
            Excelência jurídica aliada à estratégia para defender os seus interesses com transparência e ética.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-outfit font-semibold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Menu</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-white/80 hover:text-secondary transition-colors text-sm">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/equipe" className="text-white/80 hover:text-secondary transition-colors text-sm">
                {t("team")}
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="text-white/80 hover:text-secondary transition-colors text-sm">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-white/80 hover:text-secondary transition-colors text-sm">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-outfit font-semibold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Contato & Localização</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-white/80 text-sm mb-2 font-medium">Endereço Principal</p>
              <address className="not-italic text-white/60 text-sm">
                Av. Paulista, 1000<br />
                Bela Vista<br />
                São Paulo - SP, 01310-100
              </address>
            </div>
            <div>
              <p className="text-white/80 text-sm mb-2 font-medium">Fale Conosco</p>
              <p className="text-white/60 text-sm mb-1">contato@hasspezzetta.com.br</p>
              <p className="text-white/60 text-sm">+55 (11) 99999-9999</p>
              <p className="text-white/60 text-sm">+55 (11) 3333-3333</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="law-container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-xs">
          &copy; {year} Hass & Pezzetta Advocacia. Todos os direitos reservados.
        </p>
        <p className="text-white/50 text-xs">
          OAB/SP 000.000
        </p>
      </div>
    </footer>
  );
}
