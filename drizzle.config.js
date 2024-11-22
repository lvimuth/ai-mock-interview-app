import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:ZJqlD4Q7PoWm@ep-shiny-snowflake-a5biadj6.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
