import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String, // e.g. "footer", "popup", etc.
    },
  },
  { timestamps: { createdAt: "subscribedAt" } }
);

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
