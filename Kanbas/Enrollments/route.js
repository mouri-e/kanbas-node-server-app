import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    
    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
    });

    
    app.post("/api/enrollments/:courseId/:userId", (req, res) => {
        const { courseId } = req.params;
        const { userId } = req.params;
        console.log(courseId, userId);
        enrollmentsDao.enrollUserInCourse(userId, courseId);
    });

    app.delete("/api/enrollments/:courseId/:userId", (req, res) => {
        const { courseId } = req.params;
        const { userId } = req.params;
        enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        
    });
  
}
