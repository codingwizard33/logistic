import { forgotPasswordEmail } from "../../Emails/forgotPasswordEmail.js";
import User from "../../models/User.js";

const forgotPasswordService = async (req) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return {
      status: 404,
      message: 'User not found.'
    };

  try {
    await forgotPasswordEmail(user);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  return {
    status: 200,
    message: `Reset password link was sent to ${user.email} address.`
  };
};

export { forgotPasswordService };