import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import incidentRouter from "./routes/incidentRoutes.route";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/health", (req, res) => {
    res.status(200).json({ status: "Server running..." });
})

app.use("/api/incidents", incidentRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})