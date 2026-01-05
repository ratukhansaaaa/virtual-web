import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { config } from "../utils/config";


const client = postgres(config.database.url, {
  max: 10, 
  idle_timeout: 20,
  connect_timeout: 10,
});


export const db = drizzle(client, { schema });


export * from "./schema";
