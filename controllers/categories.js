import Category from "../models/category.js";
import db from "../utils/db.js";

// Fetch all Categories
export const fetchCategories = async (req, res) => {
	let sql = "SELECT * FROM categories";

	try {
		let query = db.query(sql, (err, results) => {
			if (err) throw err;
			res.status(200).json(results);
		});
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Fetch a single Category
export const fetchCategory = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Create Category
export const createCategory = async (req, res) => {
	const newCategory = req.body;
	let sql = "INSERT INTO categories SET ?";

	try {
		let query = db.query(sql, newCategory, (err, results) => {
			if (err) throw err;
			res.status(201).json(results[0]);
		});
	} catch (error) {
		console.log(error.message);
	}
};

// Update Category
export const updateCategory = async (req, res) => {
	try {
		const category = await Category.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Delete Category
export const deleteCategory = async (req, res) => {
	try {
		const category = await Category.findByIdAndDelete(req.params.id);
		res.status(200).json("Category deleted successfully");
	} catch (error) {
		res.status(500).json(error.message);
	}
};
