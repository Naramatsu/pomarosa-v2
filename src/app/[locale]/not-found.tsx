import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center animate-fade-in-up">
      <h1 className="font-display text-5xl font-black text-menu-green">
        {t("title")}
      </h1>
      <p className="mt-3 text-xl text-cocoa/70">
        {t("description")}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-block rounded-full bg-menu-green px-7 py-3 font-display font-bold uppercase tracking-wide text-cream transition-colors hover:bg-menu-green-dark"
      >
        {t("cta")}
      </Link>
    </div>
  );
}
