import jwt from "jsonwebtoken";

const signJwtTokenService = async (req) => {
  const { _id, email, role } = req;

  const token = jwt.sign({ _id: _id, email: email, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

const signRefreshTokenService = async (req) => {
  const { _id, email } = req;

  const refreshToken = jwt.sign({ _id: _id, email: email }, process.env.JWT_SECRET, { expiresIn: '30d' });

  return refreshToken;
};

const jwtVerify = async (token) => {
  const authToken = jwt.verify(token, process.env.JWT_SECRET);

  return authToken;
};

export {
  signJwtTokenService,
  signRefreshTokenService,
  jwtVerify
};