const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    }
   
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", schema);

module.exports = blogModel;
