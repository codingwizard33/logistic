import User from "../../models/User.js";
import { jwtVerify } from "./jwtService.js";

const emailVerificationService = async (req) => {
  const token = req.params.token;
  const { _id } = await jwtVerify(token);

  await User.findByIdAndUpdate(_id, { verified: true });
  
  return {
    status: 200,
    message: 'You are successfully verified.'
  };
};

export { emailVerificationService };