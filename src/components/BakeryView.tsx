import type { BakeryItem, BakerySizeItem, BakerySubsectionData } from "@/data/bakery";
import { BAKERY_SUBSECTIONS } from "@/data/bakery";
import { useLocale, useTranslations } from "next-intl";

function LeafSprig() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-menu-green/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 20 C12 20 4 14 4 8 C4 4 8 2 12 6 C16 2 20 4 20 8 C20 14 12 20 12 20Z" />
      <path d="M12 6 L12 20" strokeWidth="1" />
    </svg>
  );
}

function LeafDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="h-px flex-1 bg-menu-green/15" />
      <LeafSprig />
      <span className="h-px flex-1 bg-menu-green/15" />
    </div>
  );
}

function IndividualItems({ section }: { section: BakerySubsectionData }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const items = section.items as BakeryItem[];

  return (
    <ul className="divide-y divide-cocoa/10">
      {items.map((item) => (
        <li key={item.name} className="flex items-center justify-between gap-4 py-3">
          <span className="text-xl leading-snug text-cocoa">
            {isEn ? item.name_en : item.name}
          </span>
          <span className="whitespace-nowrap text-lg font-bold tabular-nums text-menu-green">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SizeItems({ section }: { section: BakerySubsectionData }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const t = useTranslations("Bakery");
  const items = section.items as BakerySizeItem[];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-cocoa/15">
            <th className="sr-only">{t("producto")}</th>
            <th className="w-28 py-1.5 text-right font-display text-base font-bold uppercase tracking-wide text-coffee">
              {t("mediano")}
            </th>
            <th className="w-28 py-1.5 text-right font-display text-base font-bold uppercase tracking-wide text-coffee">
              {t("grande")}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name} className="border-b border-cocoa/8">
              <td className="py-2.5 pr-4 text-xl leading-snug text-cocoa">
                {isEn ? item.name_en : item.name}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right text-lg font-bold tabular-nums text-cocoa">
                {item.priceMediano}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right text-lg font-bold tabular-nums text-menu-green">
                {item.priceGrande}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BakeryView() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pb-16 pt-6 animate-fade-in-up">
      <header className="text-center">
        <h1 className="font-display text-5xl font-black tracking-wide text-menu-green sm:text-6xl">
          {isEn ? "Bakery" : "Panadería"}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 py-2">
          <span className="h-px flex-1 bg-menu-green/15" />
          <LeafSprig />
          <span className="h-px flex-1 bg-menu-green/15" />
        </div>
      </header>

      {BAKERY_SUBSECTIONS.map((section, i) => (
        <div key={section.slug}>
          {i > 0 && <LeafDivider />}
          <section aria-label={isEn ? section.title_en : section.title} className="animate-fade-in-up">
            <div className="mt-6 rounded-2xl border border-sage p-5 pt-4">
              <h2 className="text-center font-display text-3xl font-bold tracking-wide text-menu-green sm:text-4xl">
                {isEn ? section.title_en : section.title}
              </h2>
              <div className="mt-3">
                {section.type === "size" ? (
                  <SizeItems section={section} />
                ) : (
                  <IndividualItems section={section} />
                )}
              </div>
            </div>
          </section>
        </div>
      ))}
    </article>
  );
}
