import { Currency } from "lucide-react";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  name: String,
  image: String,
  payday: {
    type: Number,
    default: 19
  },
  budget: {
    type: Number,
  },
  currency: {
    type: String,
    default: "NOK",
  },
  accessToken: String,
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
