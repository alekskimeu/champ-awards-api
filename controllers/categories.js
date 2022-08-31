import Category from "../models/category.js";

// Fetch all Categories
export const fetchCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
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
	const newCategory = new Category(req.body);
	try {
		const category = await newCategory.save();
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error.message);
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
