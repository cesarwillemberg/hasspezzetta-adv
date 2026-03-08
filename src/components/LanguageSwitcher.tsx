"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "pt-BR", label: "PT", flag: "https://flagcdn.com/w20/br.png" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w20/us.png" },
  { code: "es", label: "ES", flag: "https://flagcdn.com/w20/es.png" },
];

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const locale = useLocale();
  const router = useRouter();

  const currentLang = LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(nextLocale: string) {
    setIsOpen(false);
    if (nextLocale === locale) return;
    
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
      router.refresh();
    });
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 bg-transparent py-2 pl-3 pr-2 rounded-md 
                   border border-border hover:border-primary/50 text-sm font-medium
                   focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer
                   dark:bg-background dark:text-foreground text-foreground dark:border-gray-700
                   transition-colors disabled:opacity-50"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-[15px] object-cover rounded-[2px]" />
        <span>{currentLang.label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-background border border-border ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-muted dark:hover:bg-primary/20 transition-colors
                  ${locale === lang.code ? 'font-bold text-primary dark:text-secondary' : 'text-foreground'}
                `}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-[15px] object-cover rounded-[2px]" />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
