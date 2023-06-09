// User router here
import { Router } from "Express";
import {
  makeNewUser,
  getUserByEmail,
  updateUserById,
} from "../controllers/user";
import passport from "passport";
const router = Router();
router.post("", makeNewUser);
router.post("/login", getUserByEmail);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserById
);

export default router;
