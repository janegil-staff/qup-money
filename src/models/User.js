import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  name: String,
  image: String,
  payday: {
    type: Number,
    default: 19
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
