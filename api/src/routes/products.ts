// product router here
// product router here
import { Router } from "Express";
import {
  createProduct,
  getProductAll,
  getProductById,
  deleteProductById,
  updateProductByID,
} from "../controllers/products";

const router = Router();
router.post("", createProduct);
router.get("", getProductAll);
router.get("/:productId", getProductById);
router.delete("/:productId", deleteProductById);
router.put("/:productId", updateProductByID);
export default router;
