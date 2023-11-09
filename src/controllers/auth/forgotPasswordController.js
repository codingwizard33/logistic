import { forgotPasswordService } from "../../services/auth/forgotPasswordService.js";

const forgotPasswordController = async (req, res) => {
  const response = await forgotPasswordService(req);

  return res.status(response.status).json(response.message);
};

export { forgotPasswordController };