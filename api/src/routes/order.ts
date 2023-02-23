import { Router } from "Express";
import {
  makeNewOrder,
  getOrderByid,
  deleteOrderById,
} from "../controllers/order";
import passport from "passport";

const router = Router();
/*
router.post("/:userId", makeNewOrder);

router.get("/:id", getOrderByid); */

router.post(
  "/:userId",
  //passport.authenticate("jwt", { session: false }),
  makeNewOrder
);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getOrderByid
);
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  deleteOrderById
);
export default router;
