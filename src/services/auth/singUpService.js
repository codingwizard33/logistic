import bcrypt from "bcrypt";
import mongoose from "mongoose";

import Country from "../../models/Country.js";
import Role from "../../models/Role.js";
import User from "../../models/User.js";
import { userValidation } from "../../validations/userValidation.js";
import { signJwtTokenService, signRefreshTokenService } from "./jwtService.js";
import { registrationEmail } from "../../Emails/registrationEmail.js";

const signUpService = async (req) => {
  const {
    countryId,
    companyName,
    registrationNo,
    fullName,
    email,
    phoneNo,
    password,
    roleId
  } = req.body;

  const country = await Country.findById(countryId);
  const role = await Role.findById(roleId);

  const { error } = userValidation.validate(req.body);
  if (error)
    return {
      status: 500,
      message: error.details[0].message
    };

  try {
    var user = await User.create([{
      country: country,
      companyName: companyName,
      registrationNo: registrationNo,
      fullName: fullName,
      email: email,
      phoneNo: phoneNo,
      password: await bcrypt.hash(password, 10),
      role: role
    }], { session });

    await registrationEmail(user[0]);
    session.endSession();
  } catch (error) {    
    return {
      status: 500,
      message: error.message
    }
  }

  try {
    var authToken = await signJwtTokenService(user);
    var refreshToken = await signRefreshTokenService(user);
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
  
  return {
    status: 200,
    message: {
      user: user,
      authToken: authToken,
      refreshToken: refreshToken
    }
  };
};

export { signUpService };