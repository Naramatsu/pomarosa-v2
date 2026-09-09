import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/data/menu";

const actions = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Cómo llegar", href: MAPS_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
];

/** Contact actions + address/hours footer (server component). */
export function SiteFooter() {
  return (
    <footer className="border-t border-cocoa/10 bg-parchment/50">
      <div className="mx-auto w-full max-w-2xl px-5 py-8">
        <div className="flex flex-col gap-2 sm:flex-row">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-menu-green/30 bg-menu-green/5 px-5 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-menu-green transition-colors hover:bg-menu-green hover:text-cream hover:border-menu-green"
            >
              {a.label}
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-cocoa/50">
          Cl. 70 #3-63, Cartagena · Lun–Dom 7:00am – 9:00pm · 314 634 3249
        </p>

        <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-cocoa/35">
          Todos los precios incluyen el impoconsumo del 8%. Se sugiere una
          propina voluntaria del 10% sobre el valor total de la cuenta. Todas
          las propinas se reparten en partes iguales para el personal de la
          panadería. Es decisión del consumidor pagar o no el valor de la
          propina voluntaria.
        </p>
        <p className="mt-1 text-center text-[0.7rem] leading-relaxed text-cocoa/35">
          Ante cualquier inconveniente con el cobro de la propina, puede
          comunicarse con la Superintendencia de Industria y Comercio a través
          de sus canales de atención telefónica o por el correo institucional
          contactenos@sic.gov.co.
        </p>
      </div>
    </footer>
  );
}
