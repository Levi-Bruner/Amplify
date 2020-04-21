import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import FavoriteSchema from "../models/Favorites";
import RecommendSchema from "../models/Recommends";
import SongSchema from "../models/Songs";
import FriendSchema from "../models/Friend";



class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Favorites = mongoose.model("Favorite", FavoriteSchema);
  Recommends = mongoose.model("Recommend", RecommendSchema);
  Songs = mongoose.model("Song", SongSchema);
  Friends = mongoose.model("Friend", FriendSchema)


}

export const dbContext = new DbContext();