import express from "express";

import { signUpController } from "../controllers/auth/signUpController.js";
import { signInController } from "../controllers/auth/signInController.js";
import { emailVerificationController } from "../controllers/auth/emailVerificationController.js";
import { sendVerificationEmailController } from "../controllers/auth/sendVerificationEmailController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { sginOutController } from "../controllers/auth/signOutController.js";
import { refreshTokenController } from "../controllers/auth/refreshTokenController.js";

const router = express.Router();

router.post('/sign-up', signUpController);
router.post('/sign-in', signInController);
router.get('/refresh-token', authMiddleware, refreshTokenController);
router.get('/sign-out', authMiddleware, sginOutController);
router.get('/email-verification/:token', emailVerificationController);
router.post('/send-verification-email', authMiddleware, sendVerificationEmailController);
router.put('/forgot-password');
router.put('/reset-password');
router.put('/update-password');

export default router;