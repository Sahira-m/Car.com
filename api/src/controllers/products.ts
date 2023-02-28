// logic to deal with request and response here
import { Request, Response } from "Express";
import Product from "../models/Product";
import ProductService from "../services/products";

export const createProduct = async (request: Request, response: Response) => {
  try {
    const { productName, price, inStock, color, category, quantity, image } =
      request.body;
    const newProduct = new Product({
      productName: productName,
      price: price,
      inStock: inStock,
      color: color,
      category: category,
      quantity: quantity,
      image: image,
    });
    console.log("Product is", newProduct);
    const isCarNameExist = await ProductService.getProductByName(productName);
    if (isCarNameExist) {
      console.log("Product is", isCarNameExist);
      response.json("The car name exist");
      return;
    }

    const product = await ProductService.createProduct(newProduct);
    response.json(product);
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
    console.log("updates", request.body);
    const updateProduct = await ProductService.updateProduct(
      request.params.pid,
      request.body
    );
    response.json(updateProduct);
  } catch (error) {
    console.log(error);
  }
};
