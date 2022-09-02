import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		participants: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Event", EventSchema)