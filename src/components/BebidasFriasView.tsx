import type { MenuGroup, MenuSection } from "@/data/menu";
import { useLocale } from "next-intl";
import { MenuGroupView } from "./MenuGroupView";

function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-menu-green/40 ${className}`}
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

function JugosGroup({ group }: { group: MenuGroup }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const title = isEn ? (group.title_en ?? group.title) : group.title;
  const subtitleLines = isEn
    ? (group.subtitleLines_en ?? group.subtitleLines)
    : group.subtitleLines;

  return (
    <section aria-label={title} className="animate-fade-in-up">
      <div className="mt-10 rounded-2xl border border-sage bg-sage/30 p-5 pt-4">
        <div className="flex items-center justify-center gap-2">
          <LeafSprig />
          <h2 className="font-display text-3xl font-bold tracking-wide text-menu-green sm:text-4xl">
            {title}
          </h2>
        </div>
        {subtitleLines && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {subtitleLines.map((line) => (
              <span
                key={line}
                className="rounded-full border border-menu-green/25 bg-menu-green/8 px-4 py-2 text-lg font-bold text-menu-green"
              >
                {line}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {group.items
            .filter((item) => !item.price)
            .map((item) => (
              <span
                key={item.name}
                className="rounded-full border border-cocoa/12 bg-cream/70 px-4 py-2 text-lg font-bold text-cocoa"
              >
                {isEn ? (item.name_en ?? item.name) : item.name}
              </span>
            ))}
        </div>
        {group.items.some((item) => item.price) && (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {group.items
              .filter((item) => item.price)
              .map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-menu-green/25 bg-menu-green/8 px-4 py-2 text-lg font-bold text-menu-green"
                >
                  {isEn ? (item.name_en ?? item.name) : item.name}
                  {"  "}
                  <span className="text-base font-semibold">{item.price}</span>
                </span>
              ))}
          </div>
        )}
      </div>
      {group.note && (
        <p className="mt-3 text-sm italic text-cocoa/60">
          {isEn ? (group.note_en ?? group.note) : group.note}
        </p>
      )}
    </section>
  );
}

function LeafOrnament() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 24"
      className="mx-auto h-5 w-24 text-menu-green/50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 12 Q30 2 60 12 Q90 22 110 12" />
      <path d="M50 12 Q55 6 60 12 Q65 18 70 12" strokeWidth="1" />
      <circle cx="60" cy="12" r="2" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

/** Custom section view for Bebidas Frías — standard lists with special Jugos Naturales. */
export function BebidasFriasView({ section }: { section: MenuSection }) {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pb-16 pt-6 animate-fade-in-up">
      <header className="text-center">
        <h1 className="font-display text-5xl font-black tracking-wide text-menu-green sm:text-6xl">
          {isEn ? (section.title_en ?? section.title) : section.title}
        </h1>
        {section.tagline && (
          <p className="mt-2 font-display text-xl font-bold text-coffee">
            {isEn ? (section.tagline_en ?? section.tagline) : section.tagline}
          </p>
        )}
        <LeafOrnament />
      </header>

      {section.groups.map((group, i) => {
        const groupTitle = isEn ? (group.title_en ?? group.title) : group.title;
        const isJugos =
          groupTitle === "Jugos Naturales" || group.title === "Jugos Naturales";
        return (
          <div key={group.title ?? `group-${i}`}>
            {i > 0 && <LeafDivider />}
            {isJugos ? (
              <JugosGroup group={group} />
            ) : (
              <MenuGroupView group={group} noBackground />
            )}
          </div>
        );
      })}
    </article>
  );
}
