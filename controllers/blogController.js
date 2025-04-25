import { StatusCodes } from "http-status-codes";
import Blog from "../models/Blog.js";
import { numPostsPerPage, numPagesToDisplay } from "../config/blogConfig.js";
import { getBlogCount } from "../helpers/blogHelpers.js";

// Controller method to create a new blog post in the database.
const createBlogPost = async (req, res) => {
  // Destructure the elements of the blog post from the request body.
  const { author, title, content } = req.body;

  // Validate data and throw errors
  // To do

  // Create a new blog post in the database.
  const blogPost = await Blog.create({
    author,
    title,
    content,
  });
  // Using ejs, redirecting to "/" means we rerender index.ejs and send it to user
  // so user gets updated view.
  res.redirect("/");
};

// Get blog posts to display.
const getBlogPostsForCurrentPage = async (req, res) => {
  // Declare a variable to hold the page number from the request.
  let pagenum;
  // If there is no page num, page num is 1.
  if (!req.query.pagenum) pagenum = 1;
  // else, use the page num from the user.
  else pagenum = req.query.pagenum;

  // Set the skip value.
  const skip = (pagenum - 1) * numPostsPerPage;

  // Retrieve the blog posts from the database.
  const blogPosts = await Blog.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(numPostsPerPage);

  // Get the total blog count.
  const totalPosts = await getBlogCount();

  // Send the response, a rendered index.ejs page.
  res.render("index.ejs", {
    numPostsPerPage: numPostsPerPage,
    blogPosts,
    totalPosts,
    numPagesToDisplay,
    pagenum: +pagenum,
  });
};

export { createBlogPost, getBlogPostsForCurrentPage };
