import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
<<<<<<< HEAD
=======



>>>>>>> 936c8a272f3e97893a9d71efbb93f3848b3447a7

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);

<<<<<<< HEAD

>>>>>>> 936c8a272f3e97893a9d71efbb93f3848b3447a7
}

export const dbContext = new DbContext();
