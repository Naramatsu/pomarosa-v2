/**
 * PomaRosa menu data — transcribed exactly from "MENÚ POMAROSA (1).pdf".
 * Prices are pre-formatted strings in Colombian COP format (e.g. "$ 13.000").
 * Bilingual: Spanish (default) + English via _en fields.
 */

export interface MenuItem {
  name: string;
  name_en?: string;
  description?: string;
  description_en?: string;
  /** Single price, e.g. "$ 13.000" */
  price?: string;
  /** Cafetería table: CALIENTE column */
  hot?: string;
  /** Cafetería table: FRÍO column */
  cold?: string;
  /** Product image filename in /public/menu/, e.g. "lattegrande.jpg" */
  image?: string;
}

export interface MenuGroup {
  /** Green sub-heading inside the page, e.g. "LIMONADAS" */
  title?: string;
  title_en?: string;
  /** Small line under the group title, e.g. juice base prices or "(3 unidades)" */
  subtitle?: string;
  subtitle_en?: string;
  /** Multiple subtitle lines (e.g. "En agua ..." / "En leche ...") */
  subtitleLines?: string[];
  subtitleLines_en?: string[];
  items: MenuItem[];
  note?: string;
  note_en?: string;
}

export interface MenuSection {
  slug: string;
  /** Huge green title from the PDF — also the nav label */
  title: string;
  title_en?: string;
  /** Line under the title, e.g. combos schedule or pizza size */
  tagline?: string;
  tagline_en?: string;
  groups: MenuGroup[];
  footnotes?: string[];
  footnotes_en?: string[];
}

export const WHATSAPP_URL = "https://wa.me/573146343249";
export const MAPS_URL = "https://maps.app.goo.gl/JhDx9PVz13TeURyF6";
export const INSTAGRAM_URL =
  "https://www.instagram.com/panaderiapomarosa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const MENU_SECTIONS: MenuSection[] = [
  {
    slug: "cafeteria",
    title: "Cafetería",
    title_en: "Café",
    groups: [
      {
        items: [
          {
            name: "Te Chai latte",
            name_en: "Chai Tea Latte",
            hot: "$ 13.000",
            cold: "$ 16.500",
            image: "techai.jpg",
          },
          {
            name: "Milo",
            name_en: "Milo",
            hot: "$ 12.000",
            cold: "$ 16.000",
            image: "milo.jpg",
          },
          {
            name: "Chocolate",
            name_en: "House Hot Chocolate",
            hot: "$ 10.500",
          },
          {
            name: "Capuchino Caramel",
            name_en: "Caramel Cappuccino",
            hot: "$ 13.000",
            cold: "$ 18.500",
          },
          {
            name: "Capuchino",
            name_en: "Cappuccino",
            hot: "$ 10.500",
            cold: "$ 15.500",
            image: "capuchinos.jpeg",
          },
          {
            name: "Café doble",
            name_en: "Double Coffee",
            hot: "$ 11.500",
            cold: "$ 12.500",
          },
          {
            name: "Té Negro",
            name_en: "Black Tea",
            hot: "$ 8.000",
            image: "tenegro.jpg",
          },
          {
            name: "Latte",
            name_en: "Latte",
            hot: "$ 10.500",
            cold: "$ 14.500",
            image: "lattegrande.jpg",
          },
          {
            name: "Aromática de frutas",
            name_en: "Fruit Herbal Tea",
            hot: "$ 8.500",
          },
          {
            name: "Americano",
            name_en: "Americano",
            hot: "$ 8.000",
            cold: "$ 12.500",
          },
          {
            name: "Latte con leche de almendras",
            name_en: "Almond Milk Latte",
            hot: "$ 12.000",
            cold: "$ 15.500",
          },
          {
            name: "Avena casera fría",
            name_en: "Cold Homemade Oatmeal",
            cold: "$ 7.000",
          },
          {
            name: "Kumis tradicional",
            name_en: "Traditional Kumis",
            cold: "$ 7.500",
          },
          {
            name: "Adicional leche de Almendras ó de Avena",
            name_en: "Add Almond or Oat Milk",
            hot: "$ 3.000",
            cold: "$ 5.000",
          },
        ],
      },
      {
        title: "Para Acompañar",
        title_en: "To Accompany",
        items: [
          {
            name: "Alfajor pequeño",
            name_en: "Small Alfajor",
            price: "$ 4.000",
          },
          {
            name: "Pan de chocolate",
            name_en: "Chocolate Bread",
            price: "$ 6.000",
            image: "pandechocolate.jpg",
          },
          {
            name: "Pan jamón y queso",
            name_en: "Ham and Cheese Bread",
            price: "$ 6.500",
            image: "jamonyqueso.jpg",
          },
          {
            name: "Pan de tres quesos",
            name_en: "Three-Cheese Bread",
            price: "$ 7.500",
          },
          {
            name: "Pan Choco-Arándanos",
            name_en: "Blueberry Chocolate Bread",
            price: "$ 8.500",
          },
          { name: "Galleta", name_en: "Cookie", price: "$ 9.500" },
          {
            name: "Rollito de canela",
            name_en: "Cinnamon Roll",
            price: "$ 10.500",
          },
          { name: "Pan Pizza", name_en: "Pizza Bread", price: "$ 14.000" },
          { name: "Fatay Árabe", name_en: "Arabian Fatay", price: "$ 14.000" },
          {
            name: "Brownie con harina de garbanzo",
            name_en: "Chickpea Flour Brownie",
            price: "$ 13.500",
          },
        ],
      },
    ],
  },
  {
    slug: "bebidas-frias",
    title: "Bebidas Frías",
    title_en: "Cold Drinks",
    groups: [
      {
        title: "Limonadas",
        title_en: "Lemonades",
        items: [
          { name: "Clásica", name_en: "Classic", price: "$ 10.500" },
          { name: "Hierbabuena", name_en: "Mint", price: "$ 13.000" },
          { name: "Cerezada", name_en: "Cherry", price: "$ 15.000" },
          { name: "Coco", name_en: "Coconut", price: "$ 17.000" },
        ],
      },
      {
        title: "Jugos Naturales",
        title_en: "Natural Juices",
        subtitleLines: ["En agua  $ 11.000", "En leche  $ 13.000"],
        subtitleLines_en: ["With water  $ 11.000", "With milk  $ 13.000"],
        items: [
          { name: "Maracuyá", name_en: "Passion Fruit" },
          { name: "Guanábana", name_en: "Soursop" },
          { name: "Corozo", name_en: "Corozo" },
          { name: "Mango", name_en: "Mango" },
          { name: "Mora", name_en: "Blackberry" },
          { name: "Banano", name_en: "Banana" },
          {
            name: "Jugo de Naranja",
            name_en: "Orange Juice",
            price: "$ 12.000",
            image: "jugonaranja.jpg",
          },
        ],
      },
      {
        title: "Embotellados",
        title_en: "Bottled",
        items: [
          { name: "Gaseosa", name_en: "Soda", price: "$ 8.000" },
          { name: "Agua", name_en: "Water", price: "$ 7.000" },
          { name: "Té Hatsu", name_en: "Hatsu Tea", price: "$ 10.500" },
          { name: "Soda Hatsu", name_en: "Hatsu Soda", price: "$ 9.500" },
          {
            name: "Cerveza nacional",
            name_en: "National Beer",
            price: "$ 10.500",
          },
          {
            name: "Cerveza importada",
            name_en: "Imported Beer",
            price: "$ 13.500",
          },
        ],
      },
      {
        title: "Sodas",
        title_en: "Sodas",
        items: [
          {
            name: "Michelada",
            name_en: "Michelada",
            description: "Limón, sal y tajín",
            description_en: "Lemon, salt and tajín",
            price: "$ 11.500",
          },
          {
            name: "Frutos Rojos",
            name_en: "Red Fruits",
            description:
              "Mermelada artesanal de fresa y mora, hierbabuena y zumo de limón",
            description_en:
              "Artisanal strawberry and blackberry jam, mint and lime juice",
            price: "$ 14.000",
          },
          {
            name: "Maracuyá",
            name_en: "Passion Fruit",
            description: "Pulpa de maracuyá y hierbabuena",
            description_en: "Passion fruit pulp and mint",
            price: "$ 14.000",
          },
        ],
      },
    ],
  },
  {
    slug: "desayuno-americano",
    title: "Desayuno Americano",
    title_en: "American Breakfast",
    groups: [
      {
        items: [
          {
            name: "Clásico Americano",
            name_en: "Classic American",
            description:
              "Tocineta crocante, huevos revueltos o fritos, waffles ó pancakes con miel de maple y mantequilla",
            description_en:
              "Crispy bacon, scrambled or fried eggs, waffles or pancakes with maple syrup and butter",
            price: "$ 36.500",
            image: "desayunoamericano.webp",
          },
          {
            name: "Sándwich de Huevo",
            name_en: "Egg Sandwich",
            description:
              "Omelette con queso mozzarella, tocineta crujiente y mayonesa de la casa, en pan ciabatta",
            description_en:
              "Omelette with mozzarella cheese, crispy bacon and house mayonnaise, on ciabatta bread",
            price: "$ 22.000",
            image: "sanduchedehuevo.jpeg",
          },
          {
            name: "Waffle ó Pancaques",
            name_en: "Waffles or Pancakes",
            description: "Con miel de maple y mantequilla",
            description_en: "With maple syrup and butter",
            price: "$ 19.000",
          },
          {
            name: "Sándwich BLT",
            name_en: "BLT Sandwich",
            description:
              "Tocineta crujiente con lechuga, tomate fresco y mayonesa de la casa, en pan ciabatta",
            description_en:
              "Crispy bacon with lettuce, fresh tomato and house mayonnaise, on ciabatta bread",
            price: "$ 26.000",
          },
          {
            name: "Club Sándwich",
            name_en: "Club Sandwich",
            description:
              "Pechuga de pollo, jamón de cerdo, queso mozzarella, tocineta crujiente, huevo frito, lechuga, tomate, mayonesa y mostaza en pan artesanal",
            description_en:
              "Chicken breast, pork ham, mozzarella cheese, crispy bacon, fried egg, lettuce, tomato, mayonnaise and mustard on artisan bread",
            price: "$ 37.500",
          },
          {
            name: "Waffle Sándwich",
            name_en: "Waffle Sandwich",
            description:
              "Con jamón de cerdo, tocineta crujiente, huevos revueltos, queso mozzarella y mayonesa de ajo",
            description_en:
              "With pork ham, crispy bacon, scrambled eggs, mozzarella cheese and garlic mayonnaise",
            price: "$ 35.000",
          },
        ],
      },
      {
        title: "Agrega a tu Desayuno",
        title_en: "Add to your Breakfast",
        items: [
          {
            name: "Papas rústicas",
            name_en: "Rustic Potatoes",
            price: "$ 7.000",
          },
          {
            name: "Porción de frutas",
            name_en: "Fruit Portion",
            price: "$ 7.000",
          },
          { name: "Yogurt Griego", name_en: "Greek Yogurt", price: "$ 7.000" },
          {
            name: "Tostadas artesanales con mantequilla",
            name_en: "Artisan Toast with Butter",
            price: "$ 7.000",
          },
          {
            name: "Arepa de maíz con mantequilla",
            name_en: "Corn Arepa with Butter",
            price: "$ 8.500",
          },
          {
            name: "Arepa de maíz con mantequilla y queso costeño",
            name_en: "Corn Arepa with Butter and Coastal Cheese",
            price: "$ 12.500",
          },
        ],
      },
    ],
  },
  {
    slug: "omelettes-especiales",
    title: "Omelettes Especiales",
    title_en: "Special Omelettes",
    groups: [
      {
        items: [
          {
            name: "Salvajes",
            name_en: "Wild",
            description:
              "Omelette con chorizo santarrosano, tomate, cebolla, jamón ahumado, queso mozzarella y tocineta. Acompañado de pan artesanal y mantequilla",
            description_en:
              "Omelette with Santarrosano chorizo, tomato, onion, smoked ham, mozzarella cheese and bacon. Served with artisan bread and butter",
            price: "$ 28.000",
            image: "huevosalvajes.jpg",
          },
          {
            name: "Campestres",
            name_en: "Rustic",
            description:
              "Omelette con espinaca y champiñones salteados, relleno de queso mozzarella. Acompañado de pan artesanal y mantequilla",
            description_en:
              "Omelette with spinach and sautéed mushrooms, filled with mozzarella cheese. Served with artisan bread and butter",
            price: "$ 29.900",
            image: "huevoscampestres.jpeg",
          },
          {
            name: "Granjero",
            name_en: "Farmer",
            description:
              "Omelette de pechuga de pollo con tomate y cebolla, relleno de queso mozzarella. Acompañado de pan artesanal y mantequilla",
            description_en:
              "Chicken breast omelette with tomato and onion, filled with mozzarella cheese. Served with artisan bread and butter",
            price: "$ 29.900",
          },
        ],
      },
      {
        title: "Porción de Huevos al Gusto",
        title_en: "Eggs to Taste",
        subtitle: "(3 unidades)",
        subtitle_en: "(3 units)",
        items: [
          {
            name: "Revuelto ó fritos",
            name_en: "Scrambled or Fried",
            price: "$ 9.800",
            image: "huevosrevueltos.jpeg",
          },
          {
            name: "Tomate y Cebolla",
            name_en: "Tomato and Onion",
            price: "$ 11.900",
            image: "huevoscontomateycebolla.jpeg",
          },
          { name: "Espinaca", name_en: "Spinach", price: "$ 13.500" },
          {
            name: "Jamón y Queso",
            name_en: "Ham and Cheese",
            price: "$ 12.500",
          },
          {
            name: "Chorizo santarrosano",
            name_en: "Santarrosano Chorizo",
            price: "$ 12.500",
          },
          { name: "Pollo", name_en: "Chicken", price: "$ 14.000" },
        ],
      },
    ],
  },
  {
    slug: "combos",
    title: "Combos",
    title_en: "Combos",
    tagline: "De 7:00am a 12:00pm todos los días",
    tagline_en: "From 7:00am to 12:00pm every day",
    groups: [
      {
        items: [
          {
            name: "Express",
            name_en: "Express",
            description:
              "Huevos revueltos ó fritos con pan artesanal de la casa, mantequilla + bebida*",
            description_en:
              "Scrambled or fried eggs with house artisan bread, butter + drink*",
            price: "$ 22.000",
            image: "desayunoexpress.jpg",
          },
          {
            name: "Sándwich",
            name_en: "Sandwich",
            description:
              "En pan artesanal con mantequilla de perejil y ajo, jamón de cerdo, queso mozzarella y tomate fresco + bebida*",
            description_en:
              "On artisan bread with parsley and garlic butter, pork ham, mozzarella cheese and fresh tomato + drink*",
            price: "$ 22.000",
            image: "sanduche.jpeg",
          },
          {
            name: "Tradicional",
            name_en: "Traditional",
            description:
              "Huevos al gusto*, arepa asada de maíz o pan artesanal de la casa, mantequilla, queso mozzarella + bebida*",
            description_en:
              "Eggs to your liking*, grilled corn arepa or house artisan bread, butter, mozzarella cheese + drink*",
            price: "$ 29.900",
            image: "desayunotradicional.jpg",
          },
          {
            name: "Ranchero",
            name_en: "Ranchero",
            description:
              "Huevos revueltos con tomate, cebolla y chorizo santarrosano. Acompañados de arepa de maíz con queso costeño y mantequilla + bebida*",
            description_en:
              "Scrambled eggs with tomato, onion and Santarrosano chorizo. Served with corn arepa and coastal cheese and butter + drink*",
            price: "$ 34.500",
            image: "desayunoranchero.jpg",
          },
        ],
      },
    ],
    footnotes: [
      "*Bebida a elección entre: café negro, café con leche, chocolate, agua ó coca-cola. Aplica restricciones, cualquier cambio tiene un costo adicional. Cambio: jugo frío en agua $ 4.500, en leche $ 5.500",
    ],
    footnotes_en: [
      "*Hot beverage of your choice: black coffee, coffee with milk, chocolate, water or coca-cola. Restrictions apply, any change has an additional cost. Upgrade: cold juice with water $ 4.500, with milk $ 5.500",
    ],
  },
  {
    slug: "saludables",
    title: "Saludables",
    title_en: "Healthy",
    groups: [
      {
        items: [
          {
            name: "Bowl de Avena y Banano",
            name_en: "Oatmeal and Banana Bowl",
            description:
              "Avena en hojuelas cocida con agua o leche, canela, banano fresco cortado y semillas de chía",
            description_en:
              "Rolled oats cooked with water or milk, cinnamon, fresh sliced banana and chia seeds",
            price: "$ 15.500",
          },
          {
            name: "Plato de Fruta",
            name_en: "Fruit Plate",
            description: "Variedad de frutas de estación con semillas de chía",
            description_en: "Assorted seasonal fruits with chia seeds",
            price: "$ 18.900",
            image: "platodefruta.jpg",
          },
          {
            name: "Copa Parfait",
            name_en: "Parfait Glass",
            description:
              "Yogurt griego sin azúcar, mermelada casera de frutos rojos, granola artesanal con nueces, coco y arándanos frescos",
            description_en:
              "Unsweetened Greek yogurt, homemade berry jam, artisan granola with nuts, coconut and fresh blueberries",
            price: "$ 21.900",
            image: "copaparfait.jpeg",
          },
          {
            name: "Tostada con Aguacate",
            name_en: "Avocado Toast",
            description:
              "Tostada de pan de masa madre integral con puré de aguacate, omelette con tomates cherrys confitados y reducción de aceto balsámico",
            description_en:
              "Whole wheat sourdough toast with avocado purée, omelette with candied cherry tomatoes and balsamic reduction",
            price: "$ 30.500",
            image: "tostadadeaguacate.jpg",
          },
          {
            name: "Waffle Yuca",
            name_en: "Yuca Waffle",
            description:
              "Huevos revueltos con espinaca, aguacate fresco fileteado y waffles de masa de yuca, miel o sour cream",
            description_en:
              "Scrambled eggs with spinach, fresh sliced avocado and yuca dough waffles, honey or sour cream",
            price: "$ 33.500",
          },
        ],
      },
    ],
  },
  {
    slug: "waffles-con-helado",
    title: "Waffles con Helado",
    title_en: "Ice Cream Waffles",
    groups: [
      {
        items: [
          {
            name: "Tradicional",
            name_en: "Traditional",
            description: "Con salsa de la casa y chantilly",
            description_en: "With house sauce and chantilly",
            price: "$ 21.900",
            image: "waffleclasico.webp",
          },
          {
            name: "Caribe",
            name_en: "Caribbean",
            description:
              "Con banano fresco fileteado, salsa de arequipe y caramelo",
            description_en:
              "With fresh sliced banana, caramel sauce and dulce de leche",
            price: "$ 26.000",
          },
          {
            name: "Nutella",
            name_en: "Nutella",
            description:
              "Waffle bañado con Nutella y fresas frescas fileteadas",
            description_en:
              "Waffle drizzled with Nutella and fresh sliced strawberries",
            price: "$ 28.000",
            image: "waffledenutella.jpeg",
          },
          {
            name: "Berries",
            name_en: "Berries",
            description: "Salsa de frutos rojos con fresas y arándanos frescos",
            description_en:
              "Berry sauce with fresh strawberries and blueberries",
            price: "$ 27.000",
            image: "waffleberries.jpeg",
          },
        ],
      },
    ],
  },
  {
    slug: "pizzas",
    title: "Pizza",
    title_en: "Pizza",
    tagline: "Tamaño personal · 4 porciones",
    tagline_en: "Personal size · 4 slices",
    groups: [
      {
        items: [
          {
            name: "Napolitana",
            name_en: "Neapolitan",
            description:
              "Queso mozzarella, pomodoro, orégano, tomate fresco y aceite de ajo",
            description_en:
              "Mozzarella cheese, pomodoro, oregano, fresh tomato and garlic oil",
            price: "$ 25.500",
          },
          {
            name: "Pepperoni",
            name_en: "Pepperoni",
            description: "Queso mozzarella, pomodoro, pepperoni y orégano",
            description_en:
              "Mozzarella cheese, pomodoro, pepperoni and oregano",
            price: "$ 25.500",
            image: "pizzapepperoni.jpeg",
          },
          {
            name: "Hawapepe",
            name_en: "Hawapepe",
            description:
              "Queso mozzarella, pomodoro, trocitos de piña dulce y pepperoni",
            description_en:
              "Mozzarella cheese, pomodoro, sweet pineapple chunks and pepperoni",
            price: "$ 25.500",
            image: "pizzahawapepe.jpeg",
          },
          {
            name: "Mediterránea",
            name_en: "Mediterranean",
            description:
              "Queso mozzarella, pomodoro, champiñones, aceitunas, tomates secos, pesto y reducción balsámica",
            description_en:
              "Mozzarella cheese, pomodoro, mushrooms, olives, sun-dried tomatoes, pesto and balsamic reduction",
            price: "$ 28.500",
            image: "pizzamediterránea.jpg",
          },
          {
            name: "Pan Pizza (porción)",
            name_en: "Pizza Bread (portion)",
            description:
              "Queso mozzarella, jamón, tocineta, chorizo santarrosano y pepperoni",
            description_en:
              "Mozzarella cheese, ham, bacon, Santarrosano chorizo and pepperoni",
            price: "$ 14.000",
          },
        ],
      },
    ],
  },
];

export function getSection(slug: string): MenuSection | undefined {
  return MENU_SECTIONS.find((section) => section.slug === slug);
}
