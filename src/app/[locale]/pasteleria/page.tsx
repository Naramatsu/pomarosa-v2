import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PastryView } from "@/components/PastryView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Section" });
  const tSEO = await getTranslations({ locale, namespace: "SectionSEO" });

  return {
    title: t("pasteleria"),
    description: tSEO("pasteleria"),
    alternates: {
      canonical: "/pasteleria",
      languages: {
        es: "/es/pasteleria",
        en: "/en/pasteleria",
      },
    },
    openGraph: {
      title: `${t("pasteleria")} · PomaRosa`,
      description: tSEO("pasteleria"),
      url: `https://pomarosa.com/${locale}/pasteleria`,
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://pomarosa.com/logo.webp",
          width: 1200,
          height: 1200,
          alt: "PomaRosa Pastelería",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("pasteleria")} · PomaRosa`,
      description: tSEO("pasteleria"),
      images: ["https://pomarosa.com/logo.webp"],
    },
  };
}

export default function PasteleriaPage() {
  return <PastryView />;
}
