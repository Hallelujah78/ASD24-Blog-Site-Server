import { StatusCodes } from "http-status-codes";
import Blog from "../models/Blog.js";

const createBlogPost = async (req, res) => {
  // Destructure the elements of the blog post from the request body.
  const { author, title, content } = req.body;

  // Validate data and throw errors
  const blogPost = await Blog.create({
    author,
    title,
    content,
  });

  res.redirect("/");
};

export { createBlogPost };
