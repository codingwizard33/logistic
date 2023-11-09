import User from "../models/User.js";
import { jwtVerify } from "../services/auth/jwtService.js";

const authMiddleware = async (req, res, next) => {
  const authToken = req.header('Authorization');

  if (!authToken)
    return res.status(401).json('Authentication failed.');
  
  try {
    var { _id } = await jwtVerify(authToken.split(' ')[1]);
  } catch (error) {
    return res.status(401).json(error.message);
  }

  const { verified } = await User.findById(_id);
  if (!verified)
    return res.status(403).json('You must verified user.');

  return next();
};

export { authMiddleware };