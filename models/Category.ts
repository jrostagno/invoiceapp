import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter amount"],
  },
  userId: {
    type: String,
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
