import { ProductWithoutID, Product } from "@/types";
import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "../mocks/products.json");
const products: Array<Product> = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const ProductService = {
  getAll: (): Product[] => {
    return products;
  },

  getById: (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  },

  create: (newProduct: ProductWithoutID): Product => {
    const productCreated = {
      id: (Math.max(...products.map((product) => parseInt(product.id))) + 1).toString().padStart(3, "0"),
      ...newProduct
    }
    products.push(productCreated);
    fs.writeFileSync(
      filePath,
      JSON.stringify(products, null, 2),
      "utf-8" 
    );
    return productCreated;
  },

  update: (id: string, productToUpdate: ProductWithoutID): Product | undefined => {
    const index = products.findIndex((product) => product.id === id);
    const productUpdated = { id, ...productToUpdate };
    if (index !== -1) {
      products[index] = productUpdated;
      fs.writeFileSync(
        filePath,
        JSON.stringify(products, null, 2),
        "utf-8"
      );
      return productUpdated;
    }
    return undefined;
  },

  delete: (id: string): boolean => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      fs.writeFileSync(
        filePath,
        JSON.stringify(products, null, 2),
        "utf-8"
      );
      return true;
    }
    return false;
  }

}