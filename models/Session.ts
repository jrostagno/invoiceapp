import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: {
    type: String,
  },

  sessionToken: {
    type: String,
  },
});

export default mongoose.models.Session ||
  mongoose.model("Session", SessionSchema);
