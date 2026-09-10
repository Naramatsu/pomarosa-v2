import type { MenuSection } from "@/data/menu";
import { useLocale } from "next-intl";
import { MenuGroupView } from "./MenuGroupView";

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

/** Full menu page body: huge green title, tagline, groups, footnotes. */
export function MenuSectionView({ section }: { section: MenuSection }) {
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

      {section.groups.map((group, i) => (
        <MenuGroupView key={group.title ?? `group-${i}`} group={group} />
      ))}

      {section.footnotes?.map((note, i) => {
        const footnotes = isEn
          ? (section.footnotes_en ?? section.footnotes)
          : section.footnotes;
        return (
          <p
            key={note.slice(0, 32)}
            className="mt-8 border-t border-cocoa/10 pt-4 text-justify text-xs leading-relaxed text-cocoa/55"
          >
            {footnotes?.[i] ?? note}
          </p>
        );
      })}
    </article>
  );
}
