import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BakeryView } from "@/components/BakeryView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Section" });
  const tSEO = await getTranslations({ locale, namespace: "SectionSEO" });

  return {
    title: t("panaderia"),
    description: tSEO("panaderia"),
    alternates: {
      canonical: "/panaderia",
      languages: {
        es: "/es/panaderia",
        en: "/en/panaderia",
      },
    },
    openGraph: {
      title: `${t("panaderia")} · PomaRosa`,
      description: tSEO("panaderia"),
      url: `https://pomarosa.com/${locale}/panaderia`,
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://pomarosa.com/logo.webp",
          width: 1200,
          height: 1200,
          alt: "PomaRosa Panadería",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("panaderia")} · PomaRosa`,
      description: tSEO("panaderia"),
      images: ["https://pomarosa.com/logo.webp"],
    },
  };
}

export default function PanaderiaPage() {
  return <BakeryView />;
}
