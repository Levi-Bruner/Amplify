import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Recommend = new Schema({
  trackId:{type: String, required: true },
  sender: [{ type: String, required: true }],
  receiver: [{ type: String, required: true }],

}, { timestamps: true, toJSON: { virtuals: true } })


Recommend.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })



export default Recommend