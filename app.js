import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Import config.
import { PORT } from "./config/blogConfig.js";

import blogRouter from "./routes/blogRoutes.js";

// Mongoose and MongoDB
mongoose
  .connect("mongodb://localhost:27017/blogDatabase")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view-engine", "ejs");

// Router for handling blog CRUD ops.
app.use("/", blogRouter);

app.get("/auth", (req, res) => {
  // Send the response, a rendered auth.ejs page.
  res.render("auth.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
