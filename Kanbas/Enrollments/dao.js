import Database from "../Database/index.js";

export function findAllEnrollments() {
    const { enrollments } = Database;
    return enrollments;
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const possibleEnrollment = enrollments.find(
        (enrollment) =>
            ((enrollment.course == courseId && enrollment.user == userId)));
    //if the enrollment doesn't exist already, add it
    if (typeof(possibleEnrollment) === 'undefined') {
        enrollments.push({ _id: Date.now(), user: userId, course: courseId });
        console.log("the user enrolled for a class");
    }
    //update enrollments in server
    Database.enrollments = enrollments;
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        (enrollment) =>
        (!(enrollment.course == courseId && enrollment.user == userId)));
}