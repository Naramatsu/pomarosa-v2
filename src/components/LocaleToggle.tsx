"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

/** Language toggle switch for the header. */
export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = useCallback(() => {
    const next = locale === "es" ? "en" : "es";
    // Replace /es/ or /en/ prefix in pathname
    const newPath = pathname.replace(/^\/(es|en)/, `/${next}`) || `/${next}`;
    router.push(newPath);
  }, [locale, pathname, router]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 items-center gap-1 rounded-full border border-cocoa/15 bg-white/60 px-2 text-xs font-bold tracking-wide transition-colors hover:bg-white"
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
    >
      <span className={locale === "es" ? "text-menu-green" : "text-cocoa/40"}>ES</span>
      <span className="text-cocoa/20">/</span>
      <span className={locale === "en" ? "text-menu-green" : "text-cocoa/40"}>EN</span>
    </button>
  );
}
