import express from "express";
import { tableRouter } from "./routes/tableRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// This is needed for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(tableRouter);

// For Vercel, no app.listen()
export default app;
