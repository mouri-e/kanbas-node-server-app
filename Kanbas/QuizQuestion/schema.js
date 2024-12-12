import mongoose from "mongoose";
const quizQuestionSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    title: String,
    question: String,
    points: Number,
    questionType: {
      type: String,
      enum: ["Multiple Choice", "True False", "Fill In The Blank"],
      default: "Multiple Choice",
    },
    possibleAnswers: [String],
    correctAnswers: [String],
  },
  { collection: "quizQuestions" }
);
export default quizQuestionSchema;  

