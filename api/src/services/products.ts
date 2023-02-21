// product services
// product controller
import Product, { ProductDocument } from "../models/Product";

const createProduct = async (
  products: ProductDocument
): Promise<ProductDocument> => {
  return products.save();
};

const getProductAll = async (): Promise<ProductDocument[]> => {
  return Product.find();
};
const getProductByID = async (Id: string): Promise<ProductDocument | null> => {
  return Product.findById(Id);
};

const deleteProductById = async (
  id: string
): Promise<ProductDocument | null> => {
  return Product.findByIdAndDelete(id);
};

const updateProduct = async (
  pid: string,
  product: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  return Product.findByIdAndUpdate(pid, product, { new: true });
};

export default {
  createProduct,
  getProductAll,
  getProductByID,
  deleteProductById,
  updateProduct,
};
