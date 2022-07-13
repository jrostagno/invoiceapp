import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter amount"],
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
