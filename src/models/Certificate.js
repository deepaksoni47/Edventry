import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    certificateUrl: {
      type: String,
      required: true,
    },

    certificateId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);
