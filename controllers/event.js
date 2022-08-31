import Event from "../models/event.js";

import cloudinary from "../utils/cloudinary.js";

// Fetch all Events
export const fetchEvents = async (req, res) => {
	try {
		const events = await Event.find().sort({ votes: -1 });
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Fetch a single Event
export const fetchEvent = async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);
		res.status(200).json(event);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Create Event
export const createEvent = async (req, res) => {
	const { name, date, description, image } = req.body;
	console.log(cloudinary);
	try {
		const result = await cloudinary.uploader.upload(image, {
			folder: "events",
		});

		const event = await Event.create({
			name,
			date,
			description,
			image: {
				public_id: result.public_id,
				url: result.secure_url,
			},
		});
		res.status(200).json(event);
	} catch (error) {
		console.log(error.message);
	}
};

// Update Event
export const updateEvent = async (req, res) => {
	try {
		const event = await Event.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(event);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

// Delete Event
export const deleteEvent = async (req, res) => {
	try {
		const event = await Event.findByIdAndDelete(req.params.id);
		res.status(200).json("Event deleted successfully");
	} catch (error) {
		res.status(500).json(error.message);
	}
};
