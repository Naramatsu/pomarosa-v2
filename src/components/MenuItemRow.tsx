import type { MenuItem } from "@/data/menu";
import { useLocale } from "next-intl";
import { MenuImage } from "./MenuImage";

/** Single-price row: Name ..... $ price, with optional description below. */
export function MenuItemRow({ item }: { item: MenuItem }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const name = isEn ? item.name_en ?? item.name : item.name;
  const description = isEn ? item.description_en ?? item.description : item.description;

  return (
    <li className="flex items-start gap-3 py-2">
      {item.image && <MenuImage src={item.image} alt={name} />}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold leading-snug">{name}</span>
          <span
            aria-hidden="true"
            className="mx-1 min-w-4 flex-1 border-b-2 border-dotted border-cocoa/25"
          />
          {item.price ? (
            <span className="whitespace-nowrap text-lg font-bold tabular-nums">
              {item.price}
            </span>
          ) : null}
        </div>
        {description ? (
          <p className="mt-0.5 pr-2 text-lg leading-snug text-cocoa/70 first-letter:capitalize">
            {description}
          </p>
        ) : null}
      </div>
    </li>
  );
}
