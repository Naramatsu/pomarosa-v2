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
            <th className="w-24 py-1.5 text-right font-display text-base font-bold uppercase tracking-wide text-coffee">
              Caliente
            </th>
            <th className="w-24 py-1.5 text-right font-display text-base font-bold uppercase tracking-wide text-coffee">
              Frío
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name} className="border-b border-cocoa/8">
              <td className="py-2.5 pr-4 text-xl leading-snug">
                {item.name}
                {item.description ? (
                  <p className="mt-0.5 text-base text-cocoa/60">
                    {item.description}
                  </p>
                ) : null}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right text-lg font-bold tabular-nums">
                {item.hot ?? ""}
              </td>
              <td className="whitespace-nowrap py-2.5 text-right text-lg font-bold tabular-nums">
                {item.cold ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MenuGroupView({ group, noBackground = false }: { group: MenuGroup; noBackground?: boolean }) {
  const isHotColdTable = group.items.some((i) => i.hot ?? i.cold);
  const hasTitle = !!group.title;

  const renderItems = () => {
    if (group.subtitleLines?.length) {
      return (
        <>
          {group.subtitleLines.map((line) => (
            <p key={line} className="mb-2 text-center text-lg text-cocoa/80">
              {line}
            </p>
          ))}
          {isHotColdTable ? (
            <HotColdTable items={group.items} />
          ) : (
            <ul className="divide-y divide-cocoa/10">
              {group.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          )}
        </>
      );
    }
    if (isHotColdTable) {
      return <HotColdTable items={group.items} />;
    }
    return (
      <ul className="divide-y divide-cocoa/10">
        {group.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </ul>
    );
  };

  return (
    <section
      aria-label={group.title ?? "Productos"}
      className="animate-fade-in-up"
    >
      {hasTitle && (
        <div className={`mt-10 rounded-2xl border border-sage p-5 pt-4 ${noBackground ? "" : "bg-sage/30"}`}>
          <h2 className="text-center font-display text-3xl font-bold tracking-wide text-menu-green sm:text-4xl">
            {group.title}
          </h2>
          {group.subtitle && (
            <p className="mt-1 text-center text-lg text-cocoa/70">
              {group.subtitle}
            </p>
          )}
          <div className="mt-3">{renderItems()}</div>
        </div>
      )}

      {!hasTitle && (
        <div className="mt-6 border-t border-cocoa/10 pt-4">
          {renderItems()}
        </div>
      )}

      {group.note && (
        <p className="mt-3 text-sm italic text-cocoa/60">
          {group.note}
        </p>
      )}
    </section>
  );
}
