import express from 'express'
import multer from "multer";

import {
	createEvent,
	fetchEvent,
	fetchEvents,
	updateEvent,
	deleteEvent,
} from "../controllers/event.js";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", fetchEvents);
router.post("/", upload.single("image"), createEvent);
router.get('/:id', fetchEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);


export default router