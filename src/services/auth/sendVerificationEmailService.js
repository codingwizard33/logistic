import { registrationEmail } from "../../Emails/registrationEmail.js";
import { jwtVerify } from "./jwtService.js";

const sendVerificationEmailService = async (req) => {
  const authToken = req.header('Authorization').split(' ')[1];
  const data = await jwtVerify(authToken);

  try {
    await registrationEmail(data);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }

  return {
    status: 200,
    message: `Email verification link was sent to ${data.email} address.`
  };
};

export { sendVerificationEmailService };