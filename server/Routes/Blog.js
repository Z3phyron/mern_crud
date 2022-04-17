const express = require("express");
// import  from "../controllers/posts.js";
const router = express.Router();
const {
  getBlogs,
  createBlog,
  updateBlog,
  getSingleBlog,
  deleteBlog,
} = require("../controllers/blogController");

///posts

router.get("/", getBlogs);

router.get("/:id", getSingleBlog);

router.post("/add", createBlog);

router.post("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
