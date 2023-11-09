import express from "express";

import { indexController } from "../controllers/indexController.js";
import { getCountriesController } from "../controllers/getCountriesController.js";

const router = express.Router();

router.get('/', indexController);
router.get('/get-countries', getCountriesController);

export default router;