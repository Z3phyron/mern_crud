import React from "react";
import styled from "styled-components";
// import { useBlog } from "../../hooks/BlogContext";
import BlogSummary from "./BlogSummary";

const BlogList = (props) => {
  const { blogs } = props
  return (
    <Cont>
      {blogs && blogs.map((blog, id) => (
        <BlogSummary key={id} blog={blog} />
      ))}
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 5% 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default BlogList;
