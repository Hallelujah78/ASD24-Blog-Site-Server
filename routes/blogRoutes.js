import express from "express";
import { createBlogPost } from "../controllers/blogController.js";

const router = express.Router();

router.route("/new-blog-post").post(createBlogPost);

export default router;
