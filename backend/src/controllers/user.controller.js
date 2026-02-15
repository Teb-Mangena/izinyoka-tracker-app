import { clerkClient, getAuth } from "@clerk/express";
import User from "../models/user.model.js"

export async function authCallback(req,res) {
  try {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({
        message: "Unathorized"
      });
    }

    let user = await User.findOne({ clerkId });

    if (!user) {
      // get user info from clerk
      const clerkUser = await clerkClient.users.getUser(clerkId);

      const fullName = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();


      user = await User.create({
        clerkId,
        fullName,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        profilePic: clerkUser.imageUrl
      });
    }

    res.status(201).json(user);
  } catch (error) {
    console.log("Error in the authCallback",error);
    res.status(500).json({ message: "Internal server error"});
  }
}