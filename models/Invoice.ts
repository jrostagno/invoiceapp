import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter amount"],
  },
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "Enter Date"],
  },

  supplier: {
    type: String,
    required: [true, "Enter supplier"],
  },
  invoiceType: {
    type: String,
    required: [true, "Enter invoice type"],
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", InvoiceSchema);
