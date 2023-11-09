import { updatePasswordService } from "../../services/auth/updatePasswordService.js";

const updatePasswordController = async (req, res) => {
  const response = await updatePasswordService(req);

  return res.status(response.status).json(response.message);
};

export { updatePasswordController };