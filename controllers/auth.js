import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const loginUser = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(400).json("Invalid email or password!");

		const salt = await bcrypt.genSalt(10);

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(400).json("Invalid email or password");

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
		return res.status(200).json(token);

		// return res.status(201).json(_.pick(user, ["_id", "email"]));
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
