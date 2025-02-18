import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import articleRouter from "./route/articleRoute.js";

import { fileURLToPath } from "url"; //new line

const __filename = fileURLToPath(import.meta.url); //new line
const __dirname = path.dirname(__filename); //new line

const app = express();
const PORT =  5001;

app.use(express.static(path.join(__dirname, "dist"))); //new line
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://samid:samid@samid.6cc8g.mongodb.net/news-Articles", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/articles", articleRouter);

//new line
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
