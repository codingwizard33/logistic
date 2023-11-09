import User from "../../models/User.js";
import { jwtVerify, signJwtTokenService } from "./jwtService.js";

const refreshTokenService = async (req) => {
  try {
    var data = await jwtVerify(req.header('refreshToken'));
  } catch (error) {
    return {
      status: 401,
      message: error.message
    };
  }

  const { role } = await User.findById(data._id);
  data.role = role;
  const newAuthToken = await signJwtTokenService(data)
  
  return {
    status: 200,
    message: newAuthToken
  };
};

export { refreshTokenService };