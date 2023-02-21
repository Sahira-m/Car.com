import { Router } from "Express";
import { makeNewOrder, getAllOrder, getOrderByid } from "../controllers/order";

const router = Router();
router.post("", makeNewOrder);
router.get("", getAllOrder);
router.get("/:id", getOrderByid);

export default router;
