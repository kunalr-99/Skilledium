import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";

// File imports
import courses from "./routes/courseRoutes.js";
import posts from "./routes/postRoutes.js";

dotenv.config();
const skilledium = express();

// Middlewares
skilledium.use(express.json());
skilledium.use(express.urlencoded({ extended: false }));
skilledium.use(cors());
skilledium.use("/courses", courses);
skilledium.use("/posts", posts);

// Base Route
skilledium.get("/", (req, res) => {
  return res.json({ msg: `DB is connected` });
});

// DB Connection
const Port = process.env.PORT || 4000;
const mongo_url = process.env.MONGO_URI;
mongoose
  .connect(mongo_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    skilledium.listen(Port, (res) =>
      console.log(`DB connected & Server running at http://localhost:${Port}`)
    )
  )
  .catch((error) => console.log(error.message));
