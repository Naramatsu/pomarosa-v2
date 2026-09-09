import type { Metadata } from "next";
import { EB_Garamond, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "PomaRosa · Menú — Panadería y Café en Cartagena",
    template: "%s · PomaRosa",
  },
  description:
    "Menú de PomaRosa: cafetería, bebidas frías, desayunos americanos, omelettes, combos, saludables, waffles con helado y pizzas. Cl. 70 #3-63, Cartagena.",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-cocoa">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
