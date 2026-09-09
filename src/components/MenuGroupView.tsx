import type { MenuGroup, MenuItem } from "@/data/menu";
import { MenuItemRow } from "./MenuItemRow";

/** Cafetería-style two-column price table (CALIENTE / FRÍO). */
function HotColdTable({ items }: { items: MenuItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-cocoa/15">
            <th className="sr-only">Bebida</th>
            <th className="w-24 py-1.5 text-right font-display text-sm font-bold uppercase tracking-wide text-coffee sm:text-base">
              Caliente
            </th>
            <th className="w-24 py-1.5 text-right font-display text-sm font-bold uppercase tracking-wide text-coffee sm:text-base">
              Frío
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name} className="border-b border-cocoa/8">
              <td className="py-2.5 pr-4 text-[0.97rem] leading-snug">
                {item.name}
                {item.description ? (
                  <p className="mt-0.5 text-[0.88rem] text-cocoa/60">
                    {item.description}
                  </p>
                ) : null}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right font-bold tabular-nums">
                {item.hot ?? ""}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right font-bold tabular-nums">
                {item.cold ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MenuGroupView({ group }: { group: MenuGroup }) {
  const isHotColdTable = group.items.some((i) => i.hot ?? i.cold);
  const hasTitle = !!group.title;

  return (
    <section
      aria-label={group.title ?? "Productos"}
      className="animate-fade-in-up"
    >
      {hasTitle && (
        <div className="mt-10 rounded-2xl border border-sage bg-sage/30 p-5 pt-4">
          <h2 className="text-center font-display text-2xl font-bold tracking-wide text-menu-green sm:text-3xl">
            {group.title}
          </h2>
          {group.subtitle && (
            <p className="mt-1 text-center text-[0.93rem] text-cocoa/70">
              {group.subtitle}
            </p>
          )}
          {group.subtitleLines?.map((line) => (
            <p key={line} className="mt-1 text-center text-base text-cocoa/80">
              {line}
            </p>
          ))}
          <div className="mt-3">
            {isHotColdTable ? (
              <HotColdTable items={group.items} />
            ) : (
              <ul className="divide-y divide-cocoa/10">
                {group.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {!hasTitle && (
        <div className="mt-6 border-t border-cocoa/10 pt-4">
          {group.subtitleLines?.map((line) => (
            <p key={line} className="mb-2 text-center text-base text-cocoa/80">
              {line}
            </p>
          ))}
          <ul className="divide-y divide-cocoa/10">
            {group.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </ul>
        </div>
      )}

      {group.note && (
        <p className="mt-3 text-[0.88rem] italic text-cocoa/60">
          {group.note}
        </p>
      )}
    </section>
  );
}
