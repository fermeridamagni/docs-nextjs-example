import type { Metadata } from "next";

import Providers from "@/app/[lang]/providers";
import Header from "@/components/Header";

import { getDictionary, getLocale, SupportedLocales } from "@/dictionaries";

import { fontText } from "@/assets/fonts/config";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Docs - Next.js",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLocales }>;
}>) {
  const { lang } = await params;
  const locale = await getLocale(lang);
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontText.variable} antialiased w-full min-h-dvh selection:bg-primary selection:text-primary-foreground z-0 relative bg-background text-foreground font-text grid grid-cols-1`}
      >
        <Providers>
          <div className="w-full max-w-[1550px] mx-auto border-x border-dashed relative grid grid-cols-1">
            <Header lang={locale} dictionary={dictionary} />

            <div className="w-full flex flex-1 pt-[55px] relative">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
