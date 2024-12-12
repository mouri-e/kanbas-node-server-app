import * as quizQuestiondao from "./dao.js";
export default function QuizQuestionRoutes(app) {
    //Delete quiz question
    app.delete("/api/quizzes/:quizId/edit/questions/:questionId", async (req, res) => {
        const { quizId, questionId } = req.params;
        const status = await quizQuestiondao.deleteQuizQuestion(quizId, questionId);
        res.send(status);
    });

    //update quiz question
    app.put("/api/quizzes/:quizId/edit/questions/:questionId", async (req, res) => {
        const { quizId, questionId} = req.params;
        const quizUpdates = req.body;
        const status = await quizQuestiondao.updateQuizQuestion(quizId, questionId, quizUpdates);
        res.send(status);
    });

    //GET Questions for QUIZZES
    app.get("/api/courses/:courseId/quizzes/:quizId/edit/questions", async (req, res) => {
        const { courseId, quizId } = req.params;
        const quizQuestions = await quizQuestiondao.findQuestionsForQuiz(courseId, quizId);
        res.json(quizQuestions);
        
    });

    //ADD Question to QUIZ
    app.post("/api/courses/:courseId/quizzes/:quizId/edit/questions", async (req, res) => {
        const { courseId, quizId } = req.params;
        const quizQuestion = {
            ...req.body,
            course: courseId,
            quiz: quizId,
        };
        const newQuizQuestion = await quizQuestiondao.createQuestionForQuiz(quizQuestion);
        res.send(newQuizQuestion);
    });

}
