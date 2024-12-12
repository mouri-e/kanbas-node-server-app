//import Database from "../Database/index.js";

import model from "./model.js";

export function findQuizzesForCourse(courseId) {
    //const { assignments } = Database;
    //return assignments.filter((assignment) => assignment.course === courseId);
    return model.find({ course: courseId });
}
export function createQuiz(quiz) {
    //const newAssignment = { ...assignment, _id: Date.now().toString() };
    //Database.assignments = [...Database.assignments, assignment];
    //return newAssignment;
    delete quiz._id;
    return model.create(quiz);
}
export function deleteQuiz(quizId) {
    //const { assignments } = Database;
    //Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
    //const { assignments } = Database;
    //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    //Object.assign(assignment, assignmentUpdates);
    //return assignment;
    return model.updateOne({ _id: quizId }, quizUpdates);
}
