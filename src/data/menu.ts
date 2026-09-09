/**
 * PomaRosa menu data — transcribed exactly from "MENÚ POMAROSA (1).pdf".
 * Prices are pre-formatted strings in Colombian COP format (e.g. "$ 13.000").
 * Site language is Spanish to match the printed menu exactly.
 */

export interface MenuItem {
  name: string;
  description?: string;
  /** Single price, e.g. "$ 13.000" */
  price?: string;
  /** Cafetería table: CALIENTE column */
  hot?: string;
  /** Cafetería table: FRÍO column */
  cold?: string;
}

export interface MenuGroup {
  /** Green sub-heading inside the page, e.g. "LIMONADAS" */
  title?: string;
  /** Small line under the group title, e.g. juice base prices or "(3 unidades)" */
  subtitle?: string;
  /** Multiple subtitle lines (e.g. "En agua ..." / "En leche ...") */
  subtitleLines?: string[];
  items: MenuItem[];
  note?: string;
}

export interface MenuSection {
  slug: string;
  /** Huge green title from the PDF — also the nav label */
  title: string;
  /** Line under the title, e.g. combos schedule or pizza size */
  tagline?: string;
  groups: MenuGroup[];
  footnotes?: string[];
}

export const WHATSAPP_URL = "https://wa.me/573146343249";
export const MAPS_URL = "https://maps.app.goo.gl/JhDx9PVz13TeURyF6";
export const INSTAGRAM_URL =
  "https://www.instagram.com/panaderiapomarosa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const MENU_SECTIONS: MenuSection[] = [
  {
    slug: "cafeteria",
    title: "Cafetería",
    groups: [
      {
        items: [
          { name: "Te Chai latte", hot: "$ 13.000", cold: "$ 16.500" },
          { name: "Milo", hot: "$ 12.000", cold: "$ 16.000" },
          { name: "Chocolate", hot: "$ 10.500" },
          { name: "Capuchino Caramel", hot: "$ 13.000", cold: "$ 18.500" },
          { name: "Capuchino", hot: "$ 10.500", cold: "$ 15.500" },
          { name: "Café doble", hot: "$ 11.500", cold: "$ 12.500" },
          { name: "Té Negro", hot: "$ 8.000" },
          { name: "Latte", hot: "$ 10.500", cold: "$ 14.500" },
          { name: "Aromática de frutas", hot: "$ 8.500" },
          { name: "Americano", hot: "$ 8.000", cold: "$ 12.500" },
          {
            name: "Latte con leche de almendras",
            hot: "$ 12.000",
            cold: "$ 15.500",
          },
          { name: "Avena casera fría", cold: "$ 7.000" },
          { name: "Kumis tradicional", cold: "$ 7.500" },
          {
            name: "Adicional leche de Almendras ó de Avena",
            hot: "$ 3.000",
            cold: "$ 5.000",
          },
        ],
      },
      {
        title: "Para Acompañar",
        items: [
          { name: "Alfajor pequeño", price: "$ 4.000" },
          { name: "Pan de chocolate", price: "$ 6.000" },
          { name: "Pan jamón y queso", price: "$ 6.500" },
          { name: "Pan de tres quesos", price: "$ 7.500" },
          { name: "Pan Choco-Arándanos", price: "$ 8.500" },
          { name: "Galleta", price: "$ 9.500" },
          { name: "Rollito de canela", price: "$ 10.500" },
          { name: "Pan Pizza", price: "$ 14.000" },
          { name: "Fatay Árabe", price: "$ 14.000" },
          {
            name: "Brownie con harina de garbanzo",
            price: "$ 13.500",
          },
        ],
      },
    ],
  },
  {
    slug: "bebidas-frias",
    title: "Bebidas Frías",
    groups: [
      {
        title: "Limonadas",
        items: [
          { name: "Clásica", price: "$ 10.500" },
          { name: "Hierbabuena", price: "$ 13.000" },
          { name: "Cerezada", price: "$ 15.000" },
          { name: "Coco", price: "$ 17.000" },
        ],
      },
      {
        title: "Jugos Naturales",
        subtitleLines: ["En agua  $ 11.000", "En leche  $ 13.000"],
        items: [
          { name: "Maracuyá" },
          { name: "Guanábana" },
          { name: "Corozo" },
          { name: "Mango" },
          { name: "Mora" },
          { name: "Banano" },
          { name: "Jugo de Naranja", price: "$ 12.000" },
        ],
      },
      {
        title: "Embotellados",
        items: [
          { name: "Gaseosa", price: "$ 8.000" },
          { name: "Agua", price: "$ 7.000" },
          { name: "Té Hatsu", price: "$ 10.500" },
          { name: "Soda Hatsu", price: "$ 9.500" },
          { name: "Cerveza nacional", price: "$ 10.500" },
          { name: "Cerveza importada", price: "$ 13.500" },
        ],
      },
      {
        title: "Sodas",
        items: [
          {
            name: "Michelada",
            description: "Limón, sal y tajín",
            price: "$ 11.500",
          },
          {
            name: "Frutos Rojos",
            description:
              "Mermelada artesanal de fresa y mora, hierbabuena y zumo de limón",
            price: "$ 14.000",
          },
          {
            name: "Maracuyá",
            description: "Pulpa de maracuyá y hierbabuena",
            price: "$ 14.000",
          },
        ],
      },
    ],
  },
  {
    slug: "desayuno-americano",
    title: "Desayuno Americano",
    groups: [
      {
        items: [
          {
            name: "Clásico Americano",
            description:
              "Tocineta crocante, huevos revueltos o fritos, waffles ó pancakes con miel de maple y mantequilla",
            price: "$ 36.500",
          },
          {
            name: "Sándwich de Huevo",
            description:
              "Omelette con queso mozzarella, tocineta crujiente y mayonesa de la casa, en pan ciabatta",
            price: "$ 22.000",
          },
          {
            name: "Waffle ó Pancaques",
            description: "Con miel de maple y mantequilla",
            price: "$ 19.000",
          },
          {
            name: "Sándwich BLT",
            description:
              "Tocineta crujiente con lechuga, tomate fresco y mayonesa de la casa, en pan ciabatta",
            price: "$ 26.000",
          },
          {
            name: "Club Sándwich",
            description:
              "Pechuga de pollo, jamón de cerdo, queso mozzarella, tocineta crujiente, huevo frito, lechuga, tomate, mayonesa y mostaza en pan artesanal",
            price: "$ 37.500",
          },
          {
            name: "Waffle Sándwich",
            description:
              "Con jamón de cerdo, tocineta crujiente, huevos revueltos, queso mozzarella y mayonesa de ajo",
            price: "$ 35.000",
          },
        ],
      },
      {
        title: "Agrega a tu Desayuno",
        items: [
          { name: "Papas rústicas", price: "$ 7.000" },
          { name: "Porción de frutas", price: "$ 7.000" },
          { name: "Yogurt Griego", price: "$ 7.000" },
          {
            name: "Tostadas artesanales con mantequilla",
            price: "$ 7.000",
          },
          { name: "Arepa de maíz con mantequilla", price: "$ 8.500" },
          {
            name: "Arepa de maíz con mantequilla y queso costeño (3 unidades)",
            price: "$ 12.500",
          },
        ],
      },
    ],
  },
  {
    slug: "omelettes-especiales",
    title: "Omelettes Especiales",
    groups: [
      {
        items: [
          {
            name: "Salvajes",
            description:
              "Omelette con chorizo santarrosano, tomate, cebolla, jamón ahumado, queso mozzarella y tocineta. Acompañado de pan artesanal y mantequilla",
            price: "$ 28.000",
          },
          {
            name: "Campestres",
            description:
              "Omelette con espinaca y champiñones salteados, relleno de queso mozzarella. Acompañado de pan artesanal y mantequilla",
            price: "$ 29.900",
          },
          {
            name: "Granjero",
            description:
              "Omelette de pechuga de pollo con tomate y cebolla, relleno de queso mozzarella. Acompañado de pan artesanal y mantequilla",
            price: "$ 29.900",
          },
        ],
      },
      {
        title: "Porción de Huevos al Gusto",
        subtitle: "(3 unidades)",
        items: [
          { name: "Revuelto ó fritos", price: "$ 9.800" },
          { name: "Tomate y Cebolla", price: "$ 11.900" },
          { name: "Espinaca", price: "$ 13.500" },
          { name: "Jamón y Queso", price: "$ 12.500" },
          { name: "Chorizo santarrosano", price: "$ 12.500" },
          { name: "Pollo", price: "$ 14.000" },
        ],
      },
    ],
  },
  {
    slug: "combos",
    title: "Combos",
    tagline: "De 7:00am a 12:00pm todos los días",
    groups: [
      {
        items: [
          {
            name: "Express",
            description:
              "Huevos revueltos ó fritos con pan artesanal de la casa, mantequilla + bebida*",
            price: "$ 22.000",
          },
          {
            name: "Sándwich",
            description:
              "En pan artesanal con mantequilla de perejil y ajo, jamón de cerdo, queso mozzarella y tomate fresco + bebida*",
            price: "$ 22.000",
          },
          {
            name: "Tradicional",
            description:
              "Huevos al gusto*, arepa asada de maíz o pan artesanal de la casa, mantequilla, queso mozzarella + bebida*",
            price: "$ 29.900",
          },
          {
            name: "Ranchero",
            description:
              "Huevos revueltos con tomate, cebolla y chorizo santarrosano. Acompañados de arepa de maíz con queso costeño y mantequilla + bebida*",
            price: "$ 34.500",
          },
        ],
      },
    ],
    footnotes: [
      "*Bebida a elección entre: café negro, café con leche, chocolate, agua ó coca-cola. Aplica restricciones, cualquier cambio tiene un costo adicional. Cambio: jugo frío en agua $ 4.500, en leche $ 5.500",
    ],
  },
  {
    slug: "saludables",
    title: "Saludables",
    groups: [
      {
        items: [
          {
            name: "Bowl de Avena y Banano",
            description:
              "Avena en hojuelas cocida con agua o leche, canela, banano fresco cortado y semillas de chía",
            price: "$ 15.500",
          },
          {
            name: "Plato de Fruta",
            description:
              "Variedad de frutas de estación con semillas de chía",
            price: "$ 18.900",
          },
          {
            name: "Copa Parfait",
            description:
              "Yogurt griego sin azúcar, mermelada casera de frutos rojos, granola artesanal con nueces, coco y arándanos frescos",
            price: "$ 21.900",
          },
          {
            name: "Tostada con Aguacate",
            description:
              "Tostada de pan de masa madre integral con puré de aguacate, omelette con tomates cherrys confitados y reducción de aceto balsámico",
            price: "$ 30.500",
          },
          {
            name: "Waffle Yuca",
            description:
              "Huevos revueltos con espinaca, aguacate fresco fileteado y waffles de masa de yuca, miel o sour cream",
            price: "$ 33.500",
          },
        ],
      },
    ],
  },
  {
    slug: "waffles-con-helado",
    title: "Waffles con Helado",
    groups: [
      {
        items: [
          {
            name: "Tradicional",
            description: "Con salsa de la casa y chantilly",
            price: "$ 21.900",
          },
          {
            name: "Caribe",
            description:
              "Con banano fresco fileteado, salsa de arequipe y caramelo",
            price: "$ 26.000",
          },
          {
            name: "Nutella",
            description:
              "Waffle bañado con Nutella y fresas frescas fileteadas",
            price: "$ 28.000",
          },
          {
            name: "Berries",
            description:
              "Salsa de frutos rojos con fresas y arándanos frescos",
            price: "$ 27.000",
          },
        ],
      },
    ],
  },
  {
    slug: "pizzas",
    title: "Pizza",
    tagline: "Tamaño personal · 4 porciones",
    groups: [
      {
        items: [
          {
            name: "Napolitana",
            description:
              "Queso mozzarella, pomodoro, orégano, tomate fresco y aceite de ajo",
            price: "$ 25.500",
          },
          {
            name: "Pepperoni",
            description:
              "Queso mozzarella, pomodoro, pepperoni y orégano",
            price: "$ 25.500",
          },
          {
            name: "Hawapepe",
            description:
              "Queso mozzarella, pomodoro, trocitos de piña dulce y pepperoni",
            price: "$ 25.500",
          },
          {
            name: "Mediterránea",
            description:
              "Queso mozzarella, pomodoro, champiñones, aceitunas, tomates secos, pesto y reducción balsámica",
            price: "$ 28.500",
          },
          {
            name: "Pan Pizza (porción)",
            description:
              "Queso mozzarella, jamón, tocineta, chorizo santarrosano y pepperoni",
            price: "$ 14.000",
          },
        ],
      },
    ],
    footnotes: [
      "**Todos los precios incluyen el impoconsumo del 8% — se sugiere una propina voluntaria del 10% sobre el valor total de la cuenta. Todas las propinas se reparten en partes iguales para el personal de la panadería. Es decisión del consumidor pagar o no el valor de la propina voluntaria.**",
      "Ante cualquier inconveniente con el cobro de la propina, puede comunicarse con la Superintendencia de Industria y Comercio a través de sus canales de atención telefónica o por el correo institucional contactenos@sic.gov.co.",
    ],
  },
];

export function getSection(slug: string): MenuSection | undefined {
  return MENU_SECTIONS.find((section) => section.slug === slug);
}
