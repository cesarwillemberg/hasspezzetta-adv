import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { Inter, Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "@/styles/globals.scss";
// FontAwesome config
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Hass & Pezzetta - Advocacia",
  description: "Escritório de advocacia focado em excelência jurídica.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <Navbar />
            <div className="flex-grow flex flex-col mt-[80px]">
              {children}
            </div>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
