import { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verifyToken } from "../utils/jwt";
import { UserContext } from "../dtos/auth.dto";

export const authMiddleware = async (
  c: Context,
  next: Next
): Promise<Response | void> => {
  try {

    let token: string | undefined;

    const authHeader = c.req.header("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    } else {
  
      token = getCookie(c, "token");
    }

    if (!token) {
      return c.json({ error: "No token provided" }, 401);
    }

    
    const payload = await verifyToken(token);

    
    const user: UserContext = {
      userId: payload.userId,
      email: payload.email,
      name: payload.name,
    };

    c.set("user", user);

    return await next();
  } catch (error) {
    return c.json({ error: "Invalid or expired token" }, 401);
  }
};
