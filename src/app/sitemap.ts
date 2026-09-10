import type { MetadataRoute } from "next";
import { MENU_SECTIONS } from "@/data/menu";

const BASE_URL = "https://pomarosa.com";
const LOCALES = ["es", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homepageEntries: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }));

  const sectionEntries: MetadataRoute.Sitemap = MENU_SECTIONS.flatMap((s) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}/${s.slug}`])
        ),
      },
    }))
  );

  return [...homepageEntries, ...sectionEntries];
}
