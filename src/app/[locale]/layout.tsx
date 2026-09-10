import type { Metadata } from "next";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const body = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bakeryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "PomaRosa",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 70 #3-63",
    addressLocality: "Cartagena",
    addressCountry: "CO",
  },
  telephone: "+573146343249",
  openingHours: "Mo-Su 07:00-21:00",
  sameAs: ["https://www.instagram.com/panaderiapomarosa"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Layout" });
  return {
    title: {
      default: t("defaultTitle"),
      template: "%s · PomaRosa",
    },
    description: t("metaDescription"),
    icons: {
      icon: [
        { url: "/favicon.webp", type: "image/webp" },
        { url: "/logo.webp", type: "image/webp", sizes: "any" },
      ],
      apple: [
        { url: "/logo.webp", type: "image/webp" },
      ],
    },
    metadataBase: new URL("https://pomarosa.com"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-cocoa">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
          />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
