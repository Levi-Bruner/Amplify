import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Song = new Schema({
  trackId: {
    type: String,
    unique: true
  },
  artistName: {
    type: String,
  },
  collectionName: {
    type: String,
  },
  trackName: {
    type: String
  },
  trackPreview: {
    type: String
  },
  trackPrice: {
    type: Number
  },
  preview: {
    type: String
  },

  artworkUrl30: {
    type: String
  },
  artworkUrl60: {
    type: String
  },
  artworkUrl100: {
    type: String
  }
  // NOTE If you wish to add additional public properties for profiles do so here
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

export default Song;