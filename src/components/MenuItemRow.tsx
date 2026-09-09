import type { MenuItem } from "@/data/menu";

/** Single-price row: Name ..... $ price, with optional description below. */
export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-2">
      <div className="flex items-baseline gap-2">
        <span className="font-bold leading-snug">{item.name}</span>
        <span
          aria-hidden="true"
          className="mx-1 min-w-4 flex-1 border-b-2 border-dotted border-cocoa/25"
        />
        {item.price ? (
          <span className="whitespace-nowrap font-bold tabular-nums">
            {item.price}
          </span>
        ) : null}
      </div>
      {item.description ? (
        <p className="mt-0.5 pr-2 text-[0.93rem] leading-snug text-cocoa/70 first-letter:capitalize">
          {item.description}
        </p>
      ) : null}
    </li>
  );
}
