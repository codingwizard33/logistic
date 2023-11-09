import { refreshTokenService } from "../../services/auth/refreshTokenService.js";

const refreshTokenController = async (req, res) => {
  const response = await refreshTokenService(req);

  return res.status(response.status).json(response.message);
};

export { refreshTokenController };