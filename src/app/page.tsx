import type { Metadata } from "next";
import Link from "next/link";
import { MENU_SECTIONS } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menú",
};

function HeroLeaf() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 30"
      className="mx-auto mt-3 h-6 w-12 text-menu-green/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M10 25 Q20 5 30 15 Q40 5 50 25" />
      <path d="M25 15 Q30 8 35 15" strokeWidth="0.8" />
      <circle cx="30" cy="15" r="1.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
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
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-16 animate-fade-in-up">
      <header className="pt-12 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-coffee">
          Panadería · Pastelería · Café
        </p>
        <h1 className="mt-3 font-display text-6xl font-black tracking-wide text-menu-green sm:text-7xl">
          PomaRosa
        </h1>
        <HeroLeaf />
        <p className="mt-4 max-w-md mx-auto text-lg leading-relaxed text-cocoa/70">
          Nuestro menú, sección por sección — toca una categoría para verla.
        </p>
      </header>

      <nav aria-label="Secciones del menú" className="mt-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MENU_SECTIONS.map((s, i) => (
            <li
              key={s.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link
                href={`/${s.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-cocoa/10 bg-white/60 px-5 py-4 shadow-sm transition-all duration-200 hover:border-menu-green/40 hover:bg-menu-green hover:shadow-md hover:shadow-menu-green/10"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage/50 text-xl transition-colors duration-200 group-hover:bg-white/20"
                  aria-hidden="true"
                >
                  {categoryIcons[s.slug] ?? "🍽"}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold text-menu-green group-hover:text-cream transition-colors duration-200">
                    {s.title}
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
