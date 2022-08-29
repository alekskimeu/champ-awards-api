import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("User", UserSchema);
