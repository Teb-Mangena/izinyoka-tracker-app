import { getAuth, requireAuth } from "@clerk/express";
import User from "../models/user.model.js";

export const protectAuth = [
  requireAuth(),
  async (req,res,next) => {
    try {
      // get clerkId first
      const { userId:clerkId } = getAuth(req);

      // get user by id in the DB
      const user = await User.findOne({ clerkId });

      if(!user){
        return res.status(404).json({ message: "User does not exist"});
      }

      req.user = user;
      req.userId = user._id.toString();

      next();

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
]