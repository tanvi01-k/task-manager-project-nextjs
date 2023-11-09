import mongoose, { Schema, mongo } from "mongoose";

const UserSachema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !!"],
  },
  password: {
    type: String,
    required: [true, "Password Required !!"],
  },
  about: String,
  profileURL: String,
  //  address: {
  //     street: String,
  //     city: String,
  //     country: String,
  //     pincode: Number,
  //  },
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSachema);
