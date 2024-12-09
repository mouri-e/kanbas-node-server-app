import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        available: String,
        due: String,
        closedOn: String,
        points: Number,
        description: String,
  },
  { collection: "assignments" }
);
export default schema;