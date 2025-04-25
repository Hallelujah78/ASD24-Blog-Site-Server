import Blog from "../models/Blog.js";

const getBlogCount = async (filter = {}) => {
  return await Blog.countDocuments(filter);
};

export { getBlogCount };
