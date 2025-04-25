import express from "express";
import {
  createBlogPost,
  getBlogPostsForCurrentPage,
} from "../controllers/blogController.js";

const router = express.Router();

router.route("/").get(getBlogPostsForCurrentPage);
router.route("/new-blog-post").post(createBlogPost);

export default router;
