import express from "express";

import { signUpController } from "../controllers/auth/signUpController.js";
import { signInController } from "../controllers/auth/signInController.js";
import { emailVerificationController } from "../controllers/auth/emailVerificationController.js";
import { sendVerificationEmailController } from "../controllers/auth/sendVerificationEmailController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { sginOutController } from "../controllers/auth/signOutController.js";
import { refreshTokenController } from "../controllers/auth/refreshTokenController.js";
import { forgotPasswordController } from "../controllers/auth/forgotPasswordController.js";
import { resetPasswordController } from "../controllers/auth/resetPasswordController.js";

const router = express.Router();

router.post('/sign-up', signUpController);
router.post('/sign-in', signInController);
router.get('/refresh-token', authMiddleware, refreshTokenController);
router.get('/sign-out', authMiddleware, sginOutController);
router.get('/email-verification/:token', emailVerificationController);
router.post('/send-verification-email', authMiddleware, sendVerificationEmailController);
router.post('/forgot-password', forgotPasswordController);
router.put('/reset-password/:token', resetPasswordController);
router.put('/update-password');

export default router;