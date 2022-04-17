import React from "react";
import styled from "styled-components";
// import CategoryCard from "../../components/categories/CategoryCard";
import { useBlog } from "../../hooks/BlogContext";
import BlogList from "../blogs/BlogList";


const Home = () => {
  const { blogs } = useBlog();

  console.log(blogs);
  return (
    <Cont>
      <BlogList blogs={blogs} />
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 0 5%;
`;

export default Home;
