import express from "express";
import {
	createCategory,
	fetchCategory,
	fetchCategories,
	updateCategory,
	deleteCategory,
} from "../controllers/categories.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", fetchCategories);
router.post("/", createCategory);
router.get("/:id", fetchCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
