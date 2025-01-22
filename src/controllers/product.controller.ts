import { Request, Response } from "express";;
import { ProductService } from "../services/product.service";
import { ProductWithoutID } from "@/types";

const controller = {
  getProducts: (_req: Request, res: Response): void => {
    try {
      const products = ProductService.getAll(); 
      res.json(products);
    } catch (error) {
      res.status(500).send("Internal server error.");    
    }
  },
  getProduct: (req: Request, res: Response): void => {
    try {
      const product = ProductService.getById(req.params.id);
      if(typeof product !== 'undefined')
        res.json(product);
      else
        res.status(404).send("Product not found");
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
  createProduct: (req: Request, res: Response): void => {
    try {
      const newProduct: ProductWithoutID = req.body;
      console.log(req.body);
      const createProduct = ProductService.create(newProduct);
      res.status(201).json(createProduct);
    } catch (error) {
      res.status(500).send("Internal server error");
    }  
  },
  updateProduct: (req: Request, res: Response): void => {
    try {
      const productToUpdate: ProductWithoutID = req.body;
      const updatedProduct = ProductService.update(req.params.id, productToUpdate);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
   },
  deleteProduct: (req:Request, res:Response):void => {
    try {
      const deleted = ProductService.delete(req.params.id);
      deleted 
      ? res.send('Product deleted successfully') 
      : res.status(404).send("Product not found");
    } catch (error) {
      res.status(500).send("Internal server error");
    }  
  }

}

export default controller;