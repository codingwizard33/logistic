import { sendVerificationEmailService } from "../../services/auth/sendVerificationEmailService.js";

const sendVerificationEmailController = async (req, res) => {
  const response = await sendVerificationEmailService(req);

  return res.status(response.status).json(response.message);
};

export { sendVerificationEmailController };