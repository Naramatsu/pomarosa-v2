import { LA_DIVISA_ITEMS } from "@/data/la-divisa";
import { useLocale } from "next-intl";
import { MenuImage } from "./MenuImage";

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
          {isEn ? "La Divisa | Coffee" : "La Divisa | Café"}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 py-2">
          <span className="h-px flex-1 bg-menu-green/15" />
          <LeafSprig />
          <span className="h-px flex-1 bg-menu-green/15" />
        </div>
      </header>

      <div className="mt-6 rounded-2xl border border-sage p-5 pt-4">
        <ul className="divide-y divide-cocoa/10">
          {LA_DIVISA_ITEMS.map((item) => {
            const name = isEn ? item.name_en : item.name;
            return (
              <li
                key={item.name}
                className="flex items-start gap-3 py-3"
              >
                {item.image && <MenuImage src={item.image} alt={name} />}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl leading-snug text-cocoa">{name}</span>
                    <span
                      aria-hidden="true"
                      className="mx-1 min-w-4 flex-1 border-b-2 border-dotted border-cocoa/25"
                    />
                    <span className="whitespace-nowrap text-lg font-bold tabular-nums text-menu-green">
                      {item.price}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
