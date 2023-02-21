// logic to deal with request and response here
import { Request, Response } from "Express";
import Product from "../models/Product";
import ProductService from "../services/products";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      productType: req.body.productType,
      price: req.body.price,
      isStock: req.body.isStock,
      stockDate: req.body.stockDate,
      size: req.body.stockDate,
    });
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
