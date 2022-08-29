import _ from "lodash";
import bcrypt from "bcrypt";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (user) return res.status(400).json("User already exists!");

		user = new User(_.pick(req.body, ["email", "password"]));

		const salt = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(user.password, salt);

		await user.save();

		return res.status(201).json(_.pick(user, ["_id", "email"]));
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
