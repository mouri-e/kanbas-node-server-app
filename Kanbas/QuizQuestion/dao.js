//import Database from "../Database/index.js";

import model from "./model.js";

export function findQuestionsForQuiz(courseId, quizId) {
    //const { assignments } = Database;
    //return assignments.filter((assignment) => assignment.course === courseId);
    return model.find({ course: courseId, quiz: quizId});
}
export function createQuestionForQuiz(quizQuestion) {
    //const newAssignment = { ...assignment, _id: Date.now().toString() };
    //Database.assignments = [...Database.assignments, assignment];
    //return newAssignment;
    delete quizQuestion._id;
    return model.create(quizQuestion);
}
export function deleteQuizQuestion(quizId, quizQuestionId) {
    //const { assignments } = Database;
    //Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({ _id: quizQuestionId, quiz: quizId});
}

export function updateQuizQuestion(quizId, quizQuestionId, quizUpdates) {
    //const { assignments } = Database;
    //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    //Object.assign(assignment, assignmentUpdates);
    //return assignment;
    return model.updateOne({ _id: quizQuestionId, quiz: quizId }, quizUpdates);
}
