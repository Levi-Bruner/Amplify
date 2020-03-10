import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import UserDataSchema from "../models/UserData";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);

  UserData = mongoose.model("UserData", UserDataSchema);
}

export const dbContext = new DbContext();
