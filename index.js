import express from 'express'
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

import contestantsRoutes from "./routes/contestants.js";
import categoriesRoutes from "./routes/categories.js";
import eventsRoutes from "./routes/events.js";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import db from "./utils/db.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Connect to DB
db.connect((err) => {
	if (err) throw err;
	console.log("DB connection established.");
});

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/contestants", contestantsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server listening on: http://localhost:${PORT}`);
});
