import { handleIncident } from "../controllers/incidentController.controller.js";
import Router from "express";
import multer from "multer";

const incidentRouter = Router();
const upload = multer({ storage: multer.memoryStorage() });

incidentRouter.post("/incidents", upload.single('evidence'), handleIncident)

export default incidentRouter;