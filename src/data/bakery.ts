export interface BakeryItem {
  name: string;
  name_en: string;
  price: string;
}

export interface BakerySizeItem {
  name: string;
  name_en: string;
  priceMediano: string;
  priceGrande: string;
}

export type BakerySubsection =
  | "blancos"
  | "integrales"
  | "individuales"
  | "brioche";

export interface BakerySubsectionData {
  slug: BakerySubsection;
  title: string;
  title_en: string;
  type: "individual" | "size";
  items: BakeryItem[] | BakerySizeItem[];
}

export const BAKERY_SUBSECTIONS: BakerySubsectionData[] = [
  {
    slug: "blancos",
    title: "Masa Madre Blancos",
    title_en: "White Sourdough",
    type: "size",
    items: [
      {
        name: "Natural",
        name_en: "Natural",
        priceMediano: "$ 9.800",
        priceGrande: "$ 12.000",
      },
      {
        name: "Orégano Ajo",
        name_en: "Garlic Oregano",
        priceMediano: "$ 14.300",
        priceGrande: "$ 18.200",
      },
      {
        name: "Orégano Queso",
        name_en: "Oregano Cheese",
        priceMediano: "$ 18.700",
        priceGrande: "$ 22.500",
      },
      {
        name: "Queso crema + 3 quesos",
        name_en: "Cream Cheese + 3 Cheeses",
        priceMediano: "—",
        priceGrande: "$ 22.500",
      },
      {
        name: "Tres Quesos",
        name_en: "Three Cheeses",
        priceMediano: "$ 18.200",
        priceGrande: "$ 22.000",
      },
      {
        name: "Orégano Ajo Queso",
        name_en: "Oregano Garlic Cheese",
        priceMediano: "$ 20.800",
        priceGrande: "$ 23.800",
      },
      {
        name: "Chocolate",
        name_en: "Chocolate",
        priceMediano: "$ 18.200",
        priceGrande: "$ 22.600",
      },
      {
        name: "Bocadillo Queso",
        name_en: "Cheese Paste Bread",
        priceMediano: "$ 20.900",
        priceGrande: "$ 24.200",
      },
      {
        name: "Pesto / Provenzal",
        name_en: "Pesto / Provençal",
        priceMediano: "$ 20.900",
        priceGrande: "$ 25.000",
      },
      {
        name: "Provenzal",
        name_en: "Provençal",
        priceMediano: "—",
        priceGrande: "$ 25.000",
      },
      {
        name: "Calabaza",
        name_en: "Pumpkin",
        priceMediano: "—",
        priceGrande: "$ 22.000",
      },
      {
        name: "Calabaza y Queso",
        name_en: "Pumpkin and Cheese",
        priceMediano: "—",
        priceGrande: "$ 27.500",
      },
      {
        name: "Tomates secos y pesto",
        name_en: "Sun-dried Tomatoes and Pesto",
        priceMediano: "—",
        priceGrande: "$ 29.500",
      },
      {
        name: "Queso Costeño + Ajo",
        name_en: "Costeño Cheese + Garlic",
        priceMediano: "—",
        priceGrande: "—",
      },
      {
        name: "Hogaza Blanca",
        name_en: "White Loaf",
        priceMediano: "—",
        priceGrande: "—",
      },
    ],
  },
  {
    slug: "integrales",
    title: "Masa Madre Integrales",
    title_en: "Whole Wheat Sourdough",
    type: "size",
    items: [
      {
        name: "Salvado",
        name_en: "Bran",
        priceMediano: "$ 10.500",
        priceGrande: "$ 13.500",
      },
      {
        name: "Semillas",
        name_en: "Seeds",
        priceMediano: "$ 13.500",
        priceGrande: "$ 16.500",
      },
      {
        name: "Semillas uvas pasas",
        name_en: "Seeds Raisins",
        priceMediano: "$ 15.500",
        priceGrande: "$ 19.000",
      },
      {
        name: "6 cereales",
        name_en: "6 Cereals",
        priceMediano: "$ 16.500",
        priceGrande: "$ 20.300",
      },
      {
        name: "Brevas",
        name_en: "Fig",
        priceMediano: "—",
        priceGrande: "$ 18.800",
      },
      {
        name: "Frutos Rojos",
        name_en: "Red Fruits",
        priceMediano: "$ 19.500",
        priceGrande: "$ 23.000",
      },
      {
        name: "Arándanos Avena",
        name_en: "Blueberry Oat",
        priceMediano: "$ 21.500",
        priceGrande: "$ 26.400",
      },
      {
        name: "Arándanos Uvas pasas",
        name_en: "Blueberry Raisins",
        priceMediano: "$ 18.700",
        priceGrande: "$ 25.000",
      },
      {
        name: "Ciruelas Nueces",
        name_en: "Plum Walnut",
        priceMediano: "$ 19.600",
        priceGrande: "$ 23.500",
      },
      {
        name: "Dátiles + nueces",
        name_en: "Dates and Walnuts",
        priceMediano: "—",
        priceGrande: "$ 25.000",
      },
      {
        name: "Higos y Almendras",
        name_en: "Fig and Almond",
        priceMediano: "$ 24.500",
        priceGrande: "$ 27.500",
      },
      {
        name: "Hogaza Integral",
        name_en: "Whole Wheat Loaf",
        priceMediano: "—",
        priceGrande: "$ 14.500",
      },
      {
        name: "Hogaza Semillas",
        name_en: "Seed Loaf",
        priceMediano: "—",
        priceGrande: "$ 17.500",
      },
      {
        name: "Frutos secos",
        name_en: "Dried Fruits",
        priceMediano: "—",
        priceGrande: "$ 25.000",
      },
      {
        name: "Crema de almendras + almendras",
        name_en: "Almond Cream + Almonds",
        priceMediano: "—",
        priceGrande: "—",
      },
    ],
  },
  {
    slug: "individuales",
    title: "Individuales",
    title_en: "Individual",
    type: "individual",
    items: [
      {
        name: "Pan de Chocolate",
        name_en: "Chocolate Bread",
        price: "$ 6.000",
      },
      {
        name: "Pan Jamón y Queso",
        name_en: "Ham and Cheese Bread",
        price: "$ 6.500",
      },
      {
        name: "Pan Tres Quesos",
        name_en: "Three Cheese Bread",
        price: "$ 7.500",
      },
      {
        name: "Chocolate Arándanos",
        name_en: "Chocolate Blueberry",
        price: "$ 8.500",
      },
      { name: "Piñitas", name_en: "Pineapple Bits", price: "$ 10.500" },
      {
        name: "Molde Canela mediano",
        name_en: "Cinnamon Loaf Medium",
        price: "$ 17.200",
      },
      { name: "Galleta Avena", name_en: "Oat Cookie", price: "$ 9.500" },
      {
        name: "Galleta chips Choco",
        name_en: "Chocolate Chip Cookie",
        price: "$ 9.500",
      },
      {
        name: "Galleta red velvet",
        name_en: "Red Velvet Cookie",
        price: "$ 11.000",
      },
      {
        name: "Galleta especial",
        name_en: "Special Cookie",
        price: "$ 11.000",
      },
      {
        name: "Brownie de Garbanzo",
        name_en: "Chickpea Brownie",
        price: "$ 13.500",
      },
      { name: "Tostadas", name_en: "Toast", price: "$ 5.500" },
      {
        name: "Baguette clásico",
        name_en: "Classic Baguette",
        price: "$ 6.000",
      },
      {
        name: "Baguette orégano queso",
        name_en: "Oregano Cheese Baguette",
        price: "$ 9.500",
      },
      {
        name: "Baguette Orégano Ajo",
        name_en: "Garlic Oregano Baguette",
        price: "$ 9.300",
      },
    ],
  },
  {
    slug: "brioche",
    title: "Brioche",
    title_en: "Brioche",
    type: "size",
    items: [
      {
        name: "Natural",
        name_en: "Plain",
        priceMediano: "$ 12.000",
        priceGrande: "$ 16.500",
      },
      {
        name: "Tres Quesos",
        name_en: "Three Cheeses",
        priceMediano: "$ 19.000",
        priceGrande: "$ 23.000",
      },
      {
        name: "Chocolate",
        name_en: "Chocolate",
        priceMediano: "$ 18.000",
        priceGrande: "$ 24.200",
      },
      {
        name: "Bocadillo Queso",
        name_en: "Cheese Paste Bread",
        priceMediano: "$ 21.500",
        priceGrande: "$ 26.000",
      },
    ],
  },
];

export function getBakerySubsection(
  slug: string,
): BakerySubsectionData | undefined {
  return BAKERY_SUBSECTIONS.find((s) => s.slug === slug);
}
