// User router here
import { Router } from "Express";
import {
  makeNewUser,
  deleteUserById,
  updateUserByName,
  getUserByEmail,
} from "../controllers/user";

const router = Router();
router.post("", makeNewUser);
router.get("/:userId", getUserByEmail);
router.delete("/:userId", deleteUserById);
router.put("/:userId", updateUserByName);
export default router;
