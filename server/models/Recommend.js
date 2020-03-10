import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Recommend = new Schema(
  {
    creatorEmail: { type: String, required: true },
    provider: { type: String, required: true },
    reciver: { type: String, required: true },
    listenedTo: { type: Boolean, default: false },
    track: [{

    }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Recommend.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Recommend;
