import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext({
  blogs: null,
});

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);



  useEffect(() => {
      const getBlogs = async () => {
    await axios.get("/blogs/").then((data) => {
      // console.log(data)
      setBlogs(data.data);
    });
  };
    getBlogs();
  }, [blogs]);

  const value = {
    blogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
