import { Hono, Context } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getAllExams, getExamBySlug, submitExam, getExamSubmissionHistory } from "../services/exam.service";
import { examSubmitSchema } from "../dtos/exam.dto";
import { UserContext } from "../dtos/auth.dto";

const examRouter = new Hono();


examRouter.use("*", authMiddleware);


examRouter.get("/", async (c: Context) => {
  const exams = await getAllExams();
  return c.json(exams);
});


examRouter.get("/:slug", async (c: Context) => {
  const slug = c.req.param("slug");
  const exam = await getExamBySlug(slug);
  return c.json(exam);
});


examRouter.post("/:slug/submit", async (c: Context) => {
  const slug = c.req.param("slug");
  const user = c.get("user") as UserContext;
  const body = await c.req.json();


  const validationResult = examSubmitSchema.safeParse(body);
  if (!validationResult.success) {
    return c.json({ error: validationResult.error.issues }, 400);
  }

  const result = await submitExam(slug, user.userId, validationResult.data);
  return c.json(result);
});


examRouter.get("/:slug/submissions", async (c: Context) => {
  const slug = c.req.param("slug");
  const user = c.get("user") as UserContext;
  const history = await getExamSubmissionHistory(slug, user.userId);
  return c.json(history);
});

export default examRouter;
