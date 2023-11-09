import { resetPasswordService } from "../../services/auth/resetPasswordService.js";

const resetPasswordController = async (req, res) => {
  const response = await resetPasswordService(req);

  return res.status(response.status).json(response.message);
};

export { resetPasswordController };