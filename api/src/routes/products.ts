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
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/:pid", updateProductByID);
export default router;
