import { signInService } from "../../services/auth/signInService.js";

const signInController = async (req, res) => {
  const response = await signInService(req);

  return res.status(response.status).json(response.message);
};

export { signInController };