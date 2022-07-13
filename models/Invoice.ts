import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Enter amount"],
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
});

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", InvoiceSchema);
