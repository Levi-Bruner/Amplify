import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserData = new Schema(
  {
    creatorEmail: { type: String, required: true },
    postiveRecommends: { type: Number, default: 0 },
    totalRecommends: { type: Number, default: 0 },
    // username: { type: String, required: true, unique: true },
    favorites: [{ type: String }]

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
