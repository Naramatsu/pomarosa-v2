import type { Metadata } from "next";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { MENU_SECTIONS } from "@/data/menu";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: `Menú · PomaRosa`,
      description: t("ogDescription"),
      url: "https://pomarosa.com",
      siteName: "PomaRosa",
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://pomarosa.com/logo.webp",
          width: 1200,
          height: 1200,
          alt: "PomaRosa Panadería y Café en Cartagena",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Menú · PomaRosa`,
      description: t("ogDescription"),
      images: ["https://pomarosa.com/logo.webp"],
    },
  };
}

const categoryIcons: Record<string, string> = {
  cafeteria: "☕",
  "bebidas-frias": "🍋",
  "desayuno-americano": "🍳",
  "omelettes-especiales": "🥚",
  combos: "🎒",
  saludables: "🥗",
  "waffles-con-helado": "🧇",
  pizzas: "🍕",
  panaderia: "🍞",
};

export default function Home() {
  const t = useTranslations("Home");
  const tSection = useTranslations("Section");
  const tNav = useTranslations("Nav");
  const locale = useLocale();

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
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-16 animate-fade-in-up">
      <header className="pt-12 text-center">
        <p className="font-display text-base font-bold uppercase tracking-[0.3em] text-coffee">
          {t("tagline")}
        </p>
        <img
          src="/logo.webp"
          alt="PomaRosa"
          width={140}
          height={140}
          loading="eager"
          className="mx-auto mt-4 rounded-full border-2 border-cocoa/10"
        />
        <p className="mt-5 max-w-md mx-auto text-xl leading-relaxed text-cocoa/70">
          {t("description")}
        </p>
      </header>

      <nav aria-label={tNav("seccionesDelMenu")} className="mt-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MENU_SECTIONS.map((s, i) => (
            <li
              key={s.slug}
              className={`animate-fade-in-up${s.slug === "panaderia" ? " sm:col-span-2" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link
                href={`/${locale}/${s.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-cocoa/10 bg-white/60 px-5 py-4 shadow-sm transition-all duration-200 hover:border-menu-green/40 hover:bg-menu-green hover:shadow-md hover:shadow-menu-green/10"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/50 text-2xl transition-colors duration-200 group-hover:bg-white/20"
                  aria-hidden="true"
                >
                  {categoryIcons[s.slug] ?? "🍽"}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-bold text-menu-green group-hover:text-cream transition-colors duration-200">
                    {tSection(sectionKeyMap[s.slug] ?? "pizza")}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-menu-green/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-cream"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
