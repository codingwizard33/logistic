import { emailVerificationService } from "../../services/auth/emailVerificationService.js";

const emailVerificationController = async (req, res) => {
  const response = await emailVerificationService(req);

  return res.status(response.status).json(response.message);
};

export { emailVerificationController };