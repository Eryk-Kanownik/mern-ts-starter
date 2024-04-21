import express, { Application, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { mongoDbConnection } from "./database/connection";

dotenv.config();
const app: Application = express();
app.use(express.json());

mongoDbConnection(process.env.MONGO_URI!);

if (process.env.ENVIRONMENT === "production") {
  app.use(express.static(path.join(__dirname, "../", "client", "build")));
  app.get("/", (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to MERN stack!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server started at http://localhost:${process.env.PORT}`)
);
