import mongoose from "mongoose";
import Recommend from "../models/Recommends"
const Schema = mongoose.Schema;

const Friend = new Schema(
  {
    username: { type: String },
    email: { type: String },
    totalRecommends: { type: Number, default: 0 },
    positiveRecommends: { type: Number, default: 0 },
    recommends: [{ type: Object }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Friend;