import Event from '../models/event.js'

// Fetch all Events
export const fetchEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({  votes: -1 });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Fetch a single Event
export const fetchEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Create Event
export const createEvent = async (req, res) => {
    const newEvent = new Event(req.body)
    try {
        const event = await newEvent.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Update Event
export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Delete Event
export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json("Event deleted successfully");
    } catch (error) {
        res.status(500).json(error.message)
    }
}
