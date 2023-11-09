import express from "express";

import { getCountriesController } from "../controllers/getCountriesController.js";
import { homeController } from "../controllers/homeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/get-countries', getCountriesController);
router.get('/home', authMiddleware, homeController);

export default router;