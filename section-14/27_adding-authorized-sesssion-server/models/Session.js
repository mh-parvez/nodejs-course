import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: {
      cart: [],
    },
  },
  expires: {
    type: Number,
    default: Math.round(Date.now() / 1000 + 60 * 60 * 24 * 30),
  },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
