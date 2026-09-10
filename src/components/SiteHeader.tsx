"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { MENU_SECTIONS } from "@/data/menu";
import { LocaleToggle } from "./LocaleToggle";
import Image from "next/image";

const linkBase =
  "block w-full rounded-xl px-4 py-3 text-left font-display text-xl font-bold tracking-wide transition-colors duration-150";

function DrawerLeaf() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 20"
      className="mx-auto mt-2 h-4 w-8 text-menu-green/30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M5 15 Q12 3 20 10 Q28 3 35 15" />
      <circle cx="20" cy="10" r="1.2" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

/** Mobile-first sticky header with hamburger drawer navigation. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");
  const tSection = useTranslations("Section");

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const sectionTitleMap: Record<string, string> = {
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

  const sectionKey = MENU_SECTIONS.find((s) =>
    pathname.endsWith(`/${s.slug}`),
  )?.slug;
  const currentTitle = sectionKey
    ? tSection(sectionTitleMap[sectionKey] ?? sectionKey)
    : "PomaRosa";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-cream/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 w-full max-w-2xl items-center justify-between px-4">
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo.webp"
              alt="PomaRosa"
              width={52}
              height={52}
              loading="eager"
              className="rounded-full"
            />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 font-display text-2xl font-black tracking-wide text-menu-green text-center leading-none">
            {currentTitle}
          </span>
          <div className="flex items-center gap-2">
            <LocaleToggle />
            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-drawer"
              aria-label={open ? t("cerrarMenu") : t("abrirMenu")}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-menu-green transition-colors hover:bg-menu-green/10"
            >
              <span aria-hidden="true" className="relative block h-4.5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.75 w-full rounded-full bg-current transition-all duration-300 ease-out ${
                    open ? "top-1.75 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.75 h-0.75 w-full rounded-full bg-current transition-all duration-200 ${
                    open ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.75 w-full rounded-full bg-current transition-all duration-300 ease-out ${
                    open ? "top-1.75 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-40 bg-cocoa/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <nav
        id="menu-drawer"
        aria-label={t("seccionesDelMenu")}
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-cocoa/10 px-4">
          <span className="font-display text-xl font-black tracking-wide text-menu-green">
            {t("menu")}
          </span>
          <button
            type="button"
            onClick={close}
            aria-label={t("cerrarMenu")}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-menu-green transition-colors hover:bg-menu-green/10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <DrawerLeaf />

        <ul className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          <li>
            <Link
              href={`/${locale}`}
              onClick={close}
              tabIndex={open ? 0 : -1}
              className={`${linkBase} ${
                pathname === `/${locale}`
                  ? "bg-menu-green text-cream"
                  : "text-cocoa hover:bg-menu-green/8"
              }`}
            >
              {t("inicio")}
            </Link>
          </li>
          {MENU_SECTIONS.map((s) => {
            const active = pathname.endsWith(`/${s.slug}`);
            const translationKey = sectionTitleMap[s.slug] ?? s.slug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/${locale}/${s.slug}`}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} ${
                    active
                      ? "bg-menu-green text-cream"
                      : "text-cocoa hover:bg-menu-green/8"
                  }`}
                >
                  {tSection(translationKey)}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="border-t border-cocoa/10 px-4 py-3 text-center text-xs text-cocoa/50">
          {t("drawerFooter")}
        </p>
      </nav>
    </>
  );
}
