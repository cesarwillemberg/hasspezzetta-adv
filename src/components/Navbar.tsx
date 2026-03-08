"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  { key: "team", href: "/equipe" },
  { key: "services", href: "/servicos" },
  { key: "rights", href: "/direitos" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="law-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <img 
              src="/assets/imgs/logo/logo.avif" 
              alt="Hass & Pezzetta Logo" 
              className="w-full h-full object-contain dark:invert dark:brightness-0 transition-all rounded" 
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-outfit font-bold text-xl uppercase tracking-widest text-primary dark:text-white">
              Hass & Pezzetta
            </h1>
            <p className="font-inter text-xs tracking-widest text-muted-foreground uppercase dark:text-gray-300">
              Advocacia
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors hover:text-secondary ${
                      isActive
                        ? "text-secondary font-semibold"
                        : "text-primary dark:text-gray-300"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 pl-6 border-l w-border">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary dark:text-foreground p-2"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-lg font-medium text-primary dark:text-foreground hover:text-secondary"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Idioma</span>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
