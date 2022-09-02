import Event from "../models/event.js";

import db from "../utils/db.js";

// Fetch all Events
export const fetchEvents = async (req, res) => {
	let sql = "SELECT * FROM events";

	try {
		let query = db.query(sql, (err, results) => {
			if (err) throw err;
			res.status(200).json(results);
		});
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
	const { name, date, description, imageName } = req.body;

	let sql =
		"INSERT INTO events (name, date, description, image) VALUES (?, ?, ?, ?)";

	try {
		let query = db.query(
			sql,
			[name, date, description, imageName],
			(err, results) => {
				if (err) throw err;
				res.status(201).json(results[0]);
			}
		);
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
