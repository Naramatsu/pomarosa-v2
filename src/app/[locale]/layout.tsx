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

const BASE_URL = "https://pomarosa.com";

const bakeryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "PomaRosa",
  image: `${BASE_URL}/logo.webp`,
  url: BASE_URL,
  description:
    "Menú de PomaRosa: cafetería, bebidas frías, desayunos americanos, omelettes, combos, saludables, waffles con helado y pizzas en Cartagena de Indias.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 70 #3-63",
    addressLocality: "Cartagena de Indias",
    addressRegion: "Bolívar",
    postalCode: "130002",
    addressCountry: "CO",
  },
  telephone: "+573146343249",
  openingHours: "Mo-Su 07:00-21:00",
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/panaderiapomarosa"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Layout" });

  const title = t("defaultTitle");
  const description = t("metaDescription");
  const ogDescription = t("ogDescription");
  const keywords = t("keywords");

  return {
    title: {
      default: title,
      template: "%s · PomaRosa",
    },
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description: ogDescription,
      url: BASE_URL,
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/logo.webp`,
          width: 1200,
          height: 1200,
          alt: "PomaRosa Panadería y Café en Cartagena",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [`${BASE_URL}/logo.webp`],
    },
    icons: {
      icon: [
        { url: "/favicon.webp", type: "image/webp" },
        { url: "/logo.webp", type: "image/webp", sizes: "any" },
      ],
      apple: [{ url: "/logo.webp", type: "image/webp" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
      <head>
        <meta name="theme-color" content="#fffcf3" />
      </head>
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
