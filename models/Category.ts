import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter amount"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "Enter Email"],
  },
  createdAt: { type: Date, default: Date.now },
  name: {
    type: String,
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
