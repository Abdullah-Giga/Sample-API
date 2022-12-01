import express from "express";
import {
  getUsers,
  searchUserById,
  addUser,
  delUser,
  editUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.get("/:id", searchUserById);

router.delete("/:id", delUser);

router.patch("/:id", editUser);

export default router;
