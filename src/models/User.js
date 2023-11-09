import mongoose, { Error } from "mongoose";

const userSchema = new mongoose.Schema({
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  },
  companyName: {
    type: String
  },
  registrationNo: {
    type: Number
  },
  fullName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  phoneNo: {
    type: Number
  },
  password: {
    type: String
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  verified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  const User = this.model('User');
  const existingUser = await User.findOne({ email: this.email });
  if (existingUser) {
    const error = new Error('Email address already exist.');
    return next(error);
  }
  return next();
});

export default mongoose.model('User', userSchema);