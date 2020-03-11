import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import FavoriteSchema from "../models/Favorites";
import RecommendSchema from "../models/Recommends";



class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Favorites = mongoose.model("Favorite", FavoriteSchema);
  Recommends = mongoose.model("Recommend", RecommendSchema);


}

export const dbContext = new DbContext();
