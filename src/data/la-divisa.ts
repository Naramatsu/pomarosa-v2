export interface LaDivisaItem {
  name: string;
  name_en: string;
  price: string;
  image?: string;
}

export const LA_DIVISA_ITEMS: LaDivisaItem[] = [
  { name: "Tradicional 80gr", name_en: "Traditional 80g", price: "$ 18.500" },
  { name: "Especial 80gr", name_en: "Special 80g", price: "$ 21.500" },
  { name: "Tradicional 340gr", name_en: "Traditional 340g", price: "$ 49.700", image: "ladivisatradicional340g.webp" },
  { name: "Especial 340gr", name_en: "Special 340g", price: "$ 52.500", image: "ladivisaespecial340g.webp" },
];
