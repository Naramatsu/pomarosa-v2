import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LaDivisaView } from "@/components/LaDivisaView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Section" });
  const tSEO = await getTranslations({ locale, namespace: "SectionSEO" });

  return {
    title: t("laDivisa"),
    description: tSEO("laDivisa"),
    alternates: {
      canonical: "/la-divisa",
      languages: {
        es: "/es/la-divisa",
        en: "/en/la-divisa",
      },
    },
    openGraph: {
      title: `${t("laDivisa")} · PomaRosa`,
      description: tSEO("laDivisa"),
      url: `https://pomarosa.com/${locale}/la-divisa`,
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://pomarosa.com/logo.webp",
          width: 1200,
          height: 1200,
          alt: "PomaRosa La Divisa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("laDivisa")} · PomaRosa`,
      description: tSEO("laDivisa"),
      images: ["https://pomarosa.com/logo.webp"],
    },
  };
}

export default function LaDivisaPage() {
  return <LaDivisaView />;
}
