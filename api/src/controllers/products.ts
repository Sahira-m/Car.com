// logic to deal with request and response here
import { Request, Response } from "Express";
import Product from "../models/Product";
import ProductService from "../services/products";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      productName: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      color: req.body.color,
      category: req.body.category,
      quantity: req.body.quantity,
      image: req.body.image,
    });
    const isCarNameExist = await ProductService.getProductByName(req.body.name);
    if (isCarNameExist) {
      res.json("The car name exist");
      return;
    }
    const product = await ProductService.createProduct(newProduct);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const getProductAll = async (req: Request, res: Response) => {
  try {
    const getProdct = await ProductService.getProductAll();
    res.json(getProdct);
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (req: Request, res: Response) => {
  try {
    const getProdct = await ProductService.getProductByID(req.params.id);
    res.json(getProdct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const getProdctById = await ProductService.getProductByID(req.params.id);
    if (getProdctById) {
      const deleteProdct = await ProductService.deleteProductById(
        req.params.id
      );

      const getProdct = await ProductService.getProductAll();
      res.status(200).json(getProdct);
    } else res.json("The id doesn't exist");
  } catch (error) {
    console.log(error);
  }
};

export const updateProductByID = async (
  request: Request,
  response: Response
) => {
  try {
    const updateProduct = await ProductService.updateProduct(
      request.params.pid,
      request.body
    );
    response.json(updateProduct);
  } catch (error) {
    console.log(error);
  }
};
