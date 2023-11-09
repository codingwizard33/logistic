import transporter from "../config/mailer.js";

const sendEmailService = async (req) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: req.email,
    subject: req.title,
    html: req.content
  };

  await transporter.sendMail(mailOptions);
};

export { sendEmailService };