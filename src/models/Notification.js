import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["course", "event", "system", "certificate", "reminder"],
      default: "system",
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    link: {
      type: String,
      enum: ["info", "success", "warning", "error"],
      default: "info",
    },
    sentAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);
