import mongoose from "mongoose";

const dbConnect = () => {
  mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`The app connected to ${process.env.MONGODB_URL} URL.`);
  })
  .catch((err) => {
    console.error(err.message);
  });
};

export default dbConnect;