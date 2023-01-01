import * as dotenv from "dotenv";
import express from "express";
import payload from "payload";
import { env } from "./utils";

dotenv.config();

const app = express();

payload.init({
  secret: env.PAYLOAD_SECRET,
  mongoURL: env.MONGO_URL,
  express: app,
});

app.listen(3001, async () => {
  console.log(`payload on port: `, 3001);
});
