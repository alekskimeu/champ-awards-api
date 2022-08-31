import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from "body-parser";

import contestantsRoutes from './routes/contestants.js'
import categoriesRoutes from "./routes/categories.js";
import eventsRoutes from './routes/events.js'
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Connect DB
const connect = () => {
	mongoose
		.connect(DB_URI)
		.then(() => {
			console.log("DB connection established");
		})
		.catch((err) => {
			throw err;
		});
};

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/contestants", contestantsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
    connect(),
    console.log(`Server listening on: http://localhost:${PORT}`);
})
