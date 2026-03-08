import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const locales = ["pt-BR", "en", "es"];
const defaultLocale = "en";

export default getRequestConfig(async () => {
  // First, check the cookie
  const cookieStore = await cookies();
  let locale = cookieStore.get("NEXT_LOCALE")?.value;

  // If no cookie, check the Accept-Language header
  if (!locale) {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");
    
    if (acceptLanguage) {
      const parsedLanguage = acceptLanguage.split(",")[0].split("-")[0];
      if (locales.includes(parsedLanguage)) {
        locale = parsedLanguage;
      } else if (parsedLanguage === "pt" && locales.includes("pt-BR")) {
        locale = "pt-BR";
      }
    }
  }

  // Ensure valid locale
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../locale/${locale}.json`)).default,
  };
});
