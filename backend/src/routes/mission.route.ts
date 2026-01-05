import { Hono, Context } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getNextMission, submitMissionAnswer, getMissionCompletionHistory } from "../services/mission.service";
import { missionAnswerSchema } from "../dtos/mission.dto";
import { UserContext } from "../dtos/auth.dto";

const missionRouter = new Hono();


missionRouter.use("*", authMiddleware);


missionRouter.get("/next", async (c: Context) => {
  const user = c.get("user") as UserContext;
  const result = await getNextMission(user.userId);
  return c.json(result);
});


missionRouter.post("/:slug/answer", async (c: Context) => {
  const slug = c.req.param("slug");
  const user = c.get("user") as UserContext;
  const body = await c.req.json();

  const validationResult = missionAnswerSchema.safeParse(body);
  if (!validationResult.success) {
    return c.json({ error: validationResult.error.issues }, 400);
  }

  const result = await submitMissionAnswer(slug, user.userId, validationResult.data);
  return c.json(result);
});


missionRouter.get("/completions", async (c: Context) => {
  const user = c.get("user") as UserContext;
  const history = await getMissionCompletionHistory(user.userId);
  return c.json(history);
});

export default missionRouter;
