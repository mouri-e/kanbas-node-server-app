import model from "./model.js";
//import Database from "../Database/index.js";

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}


export function findAllEnrollments() {
    //const { enrollments } = Database;
    //return enrollments;
    return model.find();
}

/*

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
        */