import { LA_DIVISA_ITEMS } from "@/data/la-divisa";
import { useLocale } from "next-intl";

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

export function LaDivisaView() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pb-16 pt-6 animate-fade-in-up">
      <header className="text-center">
        <h1 className="font-display text-5xl font-black tracking-wide text-menu-green sm:text-6xl">
          {isEn ? "La Divisa" : "La Divisa"}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 py-2">
          <span className="h-px flex-1 bg-menu-green/15" />
          <LeafSprig />
          <span className="h-px flex-1 bg-menu-green/15" />
        </div>
      </header>

      <div className="mt-6 rounded-2xl border border-sage p-5 pt-4">
        <ul className="divide-y divide-cocoa/10">
          {LA_DIVISA_ITEMS.map((item) => (
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
      </div>
    </article>
  );
}
