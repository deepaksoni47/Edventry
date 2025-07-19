import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },

    enrolledCourses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Enrollment" },
    ],
    registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],
    certificates: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Certificate" },
    ],

    wishlist: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: "wishlistType",
        },
        wishlistType: {
          type: String,
          required: true,
          enum: ["Course", "Event"],
        },
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// ✅ Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
