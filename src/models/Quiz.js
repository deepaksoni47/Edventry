import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

const quizSchema = new mongoose.Schema(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },

    questions: [questionSchema],

    timeLimit: {
      type: Number, // in minutes
      default: 10,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
