import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
 {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: String,
    description: String,
    quizType: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },
    questions: [String],
    points: Number,
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    timeLimit: {
      type: Number,
      default: 20,
    },
    multipleAttempts: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    numberOfAttempts: {
      type: Number,
      default: 1,
    },
    showCorrectAnswers: {
      type: String,
      default: "Immediately",
    },
    accessCode: {
      type: String,
      default: "",
    },
    oneQuestionAtATime: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    webcamRequired: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    lockQuestionsAfterAnswering: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
 },
 { collection: "quizzes" }
);
export default quizSchema;

