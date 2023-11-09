import joi from "joi";

const userValidation = joi.object({
  countryId: joi.string().required(),
  companyName: joi.string().required(),
  registrationNo: joi.number().required(),
  fullName: joi.string().required(),
  email: joi.string().required(),
  phoneNo: joi.number().required(),
  password: joi.string().min(8).required(),
  passwordConfirmation: joi.string().valid(joi.ref('password')).required().messages({ 'any.only': 'Password confirmation does not match.' }),
  roleId: joi.string().required()
});

export { userValidation };