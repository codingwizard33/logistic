import bcrypt from "bcrypt";

import User from "../../models/User.js";
import { signJwtTokenService, signRefreshTokenService } from "./jwtService.js";

const signInService = async (req) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user)
    return {
      status: 403,
      message: 'Authentication failed.'
    };

  const identify = await bcrypt.compare(password, user.password);
  if (!identify)
    return {
      status: 403,
      message: 'Authentication failed.'
    };

  try {
    var authToken = await signJwtTokenService(user);
    var refreshToken = await signRefreshTokenService(user);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
  
  return {
    status: 200,
    message: {
      user: user,
      authToken: authToken,
      refreshToken: refreshToken
    }
  };
};

export { signInService };