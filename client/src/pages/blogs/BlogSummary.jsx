import React from "react";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import { Link } from "react-router-dom";
import WordLimit from "react-word-limit";
import moment from "moment";

const BlogSummary = (props) => {
  const { blog } = props;
  console.log(blog);
  const imgUrl = "/assets/images/";
  return (
    <Card>
      <Image>
        <img src={imgUrl + blog.image} alt="" />
      </Image>
      <BlogDetails>
        <BlogAuth>
          <div className="blog_by">
            <span>By</span> {blog.author}
          </div>
          <div className="time_stamp">{moment(blog.time).format()}</div>
        </BlogAuth>
        <Content>
          <div className="blog_title">
            {/* {blog.title} */}
            <WordLimit limit={10}>{blog.title}</WordLimit>
          </div>
          <div className="blog_content">
            {/* {blog.content} */}
            <WordLimit limit={100}>{blog.content}</WordLimit>
          </div>
        </Content>
        <Cta>
          <Link to={`/blog/${blog._id}`} className="read_more">
            Read more
          </Link>
        </Cta>
      </BlogDetails>
    </Card>
  );
};

const Card = styled.div`
  /* p  */
  width: 250px;
  /* min-height: 220px; */
  /* max-height: 220px; */
  height: auto;
  border-radius: 10px;
  background: #fff;
  position: relative;

  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-bottom: 10vh;

  @media (max-width: 900px) {
    width: 250px;
    height: auto;
    /* min-height: 220px; */
    /* max-height: 220px; */
  }

  .read_more {
    position: absolute;
    right: 0;
    bottom: 0;
    /* border-radius  */
  }
`;

const Image = styled.div`
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  img {
    width: 100%;
  }
`;
const BlogDetails = styled.div`
  /* p  */

  padding: 10px 15px;
`;
const BlogAuth = styled.div`
  /* p  */

  display: grid;
  grid-gap: 5px;
  margin-bottom: 10px;

  .blog_by span {
    color: #33f;
  }
`;
const Content = styled.div`
  /* p  */
  .blog_title {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    margin-bottom: 15px;
  }
  .blog_content {
    font-size: 12px;
    font-weight: 100;
    color: #011;
    margin-bottom: 15px;
  }
`;

export default BlogSummary;
