import { useTranslations } from "next-intl";
import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/data/menu";

/** Contact actions + address/hours footer. */
export function SiteFooter() {
  const t = useTranslations("Footer");

  const actions = [
    { label: t("whatsapp"), href: WHATSAPP_URL },
    { label: t("comoLlegar"), href: MAPS_URL },
    { label: t("instagram"), href: INSTAGRAM_URL },
  ];

  return (
    <footer className="border-t border-cocoa/10 bg-parchment/50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8">
        <div className="flex flex-col gap-2 sm:flex-row">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-menu-green/30 bg-menu-green/5 px-5 py-3 text-center font-display text-lg font-bold uppercase tracking-wide text-menu-green transition-colors hover:bg-menu-green hover:text-cream hover:border-menu-green"
            >
              {a.label}
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-cocoa/50">
          {t("addressHours")}
        </p>

        <p className="mt-4 text-center text-sm leading-relaxed text-cocoa/35">
          {t("legalDisclaimer")}
        </p>
        <p className="mt-1 text-center text-sm leading-relaxed text-cocoa/35">
          {t("sicDisclaimer")}
        </p>
      </div>
    </footer>
  );
}
