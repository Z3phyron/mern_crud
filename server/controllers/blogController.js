const blogModel = require("../models/blogModel.js");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getSingleBlog = async (req, res) => {
  // console.log(req.params.id)
  try {
    const blog = await blogModel.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = req.body;

    console.log(newBlog);

    const blog = new blogModel(newBlog);
    await blog.save();

    res.status(200).send(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updateBlog = req.body;
    console.log(updateBlog)

    const blog = await blogModel.findByIdAndUpdate(
      { _id: updateBlog._id },
      updateBlog,
      { new: true }
    );

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteBlog = async (req, res) => {
  console.log(req.body);
  try {
    const blog = await blogModel.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      msg: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
