import express from "express";

import { homeController } from "../controllers/homeController.js";
import { createOrderController } from "../controllers/createOrderController.js";
import upload from "../helpers/fileUpload.js";

const router = express.Router();

router.get('/home', homeController);
router.post('/create-order', upload.single('file'), createOrderController);

export default router;