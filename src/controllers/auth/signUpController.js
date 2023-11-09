import { signUpService } from "../../services/auth/singUpService.js";

const signUpController = async (req, res) => {
  const response = await signUpService(req);

  return res.status(response.status).json(response.message);
};

export { signUpController };