export type size_available = ["XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL" | "XXXXL"];
export type colors_available = ["cammel" | "black" | "white" | "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "pink" | "brown" | "grey" | "silver" | "gold" | "multicolor" | "other"];

export interface Product {
  id: string,
  name: string,
  category: string,
  price: numberstring,
  sizes_available: size_available[],
  colors_available: colors_available[],
  material: string,
  brand: string,
  gender: string,
  style: string,
  season: string,
  rating: number,
  number_of_reviews?: number,
  release_date?: string,
  discount?: number,
  stock: number,
  sold?: number,
  tags?:string[],
  images?:string[],
  description: string
}
export type ProductWithoutID = Omit<Product, 'id'>;