import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { connectToMongoDB } from "./services/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

connectToMongoDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
