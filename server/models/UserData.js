import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Favorite = new Schema({
  trackId: { type: String, required: true },
  title: { type: String }
})

const UserData = new Schema(
  {
    creatorEmail: { type: String, required: true },
    postiveRecommend: { type: Number, default: 0 },
    totalRecommends: { type: Number, default: 0 },
    // username: { type: String, required: true, unique: true },
    favorites: [Favorite]

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

UserData.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default UserData;
