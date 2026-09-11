import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { BebidasFriasView } from "@/components/BebidasFriasView";
import { MenuSectionView } from "@/components/MenuSectionView";
import { MENU_SECTIONS, getSection } from "@/data/menu";

const DEDICATED_SLUGS = ["panaderia", "pasteleria", "la-divisa"];

export function generateStaticParams() {
  return MENU_SECTIONS.filter((s) => !DEDICATED_SLUGS.includes(s.slug)).flatMap(
    (s) => ["es", "en"].map((locale) => ({ locale, slug: s.slug }))
  );
}

const sectionKeyMap: Record<string, string> = {
  cafeteria: "cafeteria",
  "bebidas-frias": "bebidasFrias",
  "desayuno-americano": "desayunoAmericano",
  "omelettes-especiales": "omelettesEspeciales",
  combos: "combos",
  saludables: "saludables",
  "waffles-con-helado": "wafflesConHelado",
  pizzas: "pizza",
  panaderia: "panaderia",
  pasteleria: "pasteleria",
  "la-divisa": "laDivisa",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const section = getSection(slug);
  if (!section) return {};

  const tSection = await getTranslations({ locale, namespace: "Section" });
  const tSEO = await getTranslations({ locale, namespace: "SectionSEO" });

  const sectionKey = sectionKeyMap[slug] ?? slug;
  const title = tSection(sectionKey);
  const description = tSEO(sectionKey);

  return {
    title,
    description,
    alternates: {
      canonical: `/${slug}`,
      languages: {
        es: `/es/${slug}`,
        en: `/en/${slug}`,
      },
    },
    openGraph: {
      title: `${title} · PomaRosa`,
      description,
      url: `https://pomarosa.com/${locale}/${slug}`,
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://pomarosa.com/logo.webp",
          width: 1200,
          height: 1200,
          alt: `PomaRosa ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · PomaRosa`,
      description,
      images: ["https://pomarosa.com/logo.webp"],
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  if (slug === "bebidas-frias") {
    return <BebidasFriasView section={section} />;
  }

  return <MenuSectionView section={section} />;
}
