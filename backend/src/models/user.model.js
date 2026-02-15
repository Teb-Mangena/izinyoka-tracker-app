import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profilePic: {
    type: String
  }
},{timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;