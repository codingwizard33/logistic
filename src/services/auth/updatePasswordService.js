import bcrypt from "bcrypt";

import User from "../../models/User.js";
import { jwtVerify } from "./jwtService.js";

const updatePasswordService = async (req) => {
  const { currentPassword, password, passwordConfirmation } = req.body;

  if (!currentPassword || !password || !passwordConfirmation)
    return {
      status: 403,
      message: 'The old password, password and password confirmation fields are required.'
    };

  if (password !== passwordConfirmation)
    return {
      status: 401,
      message: 'Password do not match.'
    };

  const authToken = req.header('Authorization').split(' ')[1];

  try {
    var { _id } = await jwtVerify(authToken);
  } catch (error) {
    return {
      status: 403,
      message: error.message
    };
  }
    
  const user = await User.findById(_id);
  const verification = await bcrypt.compare(currentPassword, user.password);

  if (!verification)
    return {
      status: 403,
      message: 'Wrong current password.'
    };
  
  try {
    user.password = await bcrypt.hash(password, 10);
  } catch (error) {
    return {
      status: 403,
      message: error.message
    };
  }

  return {
    status: 200,
    message: 'Password was chenged successfully.'
  };
};

export { updatePasswordService };