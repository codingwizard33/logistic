import jwt from "jsonwebtoken";

import { sendEmailService } from "../services/sendEmailService.js";

const forgotPasswordEmail = async (req) => {
  const { email, _id } = req;

  const token = jwt.sign({ _id: _id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const content = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Password reset</title>
    </head>
    <body>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="padding: 20px 0; text-align: center; background-color: #007bff;">
                                <h1 style="color: #fff;">Password reset</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 20px;">
                                <p>To reset password, please click the button below:</p>
                                <a href="http://logistic.local/auth/reset-password/${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none;">Verify Email</a>
                                <p>If you didn't create an account on our website, you can safely ignore this email.</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #f0f0f0; text-align: center; padding: 20px;">
                                <p>&copy; 2023 Logistic. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;

  const data = {
    email: email,
    title: 'Reset Password',
    content: content
  };

  
  return await sendEmailService(data);
};

export { forgotPasswordEmail };