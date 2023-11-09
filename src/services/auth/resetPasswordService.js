import bcrypt from "bcrypt";

import User from "../../models/User.js";
import { jwtVerify } from "./jwtService.js";

const resetPasswordService = async (req) => {
  try {
    var { _id } = await jwtVerify(req.params.token);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
  
  const { password, passwordConfirmation } = req.body;

  if (!password || !passwordConfirmation)
    return {
      status: 403,
      message: 'The password and password confirmation fields are required.'
    };

  if (password !== passwordConfirmation)
    return {
      status: 401,
      message: 'Password do not match.'
    };

  try {
    await User.findByIdAndUpdate(_id, { password: await bcrypt.hash(password, 10) });
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  return {
    status: 200,
    message: 'Your password was changed successfully.'
  };
};

export { resetPasswordService };