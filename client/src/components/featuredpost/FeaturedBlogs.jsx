import React from 'react';
import styled from "styled-components";


const FeaturedBlogs = () => {
  return (
    <Card>
      <Image>
        <img src={post.img} alt="" />
      </Image>
      {/* <PostDetails>
        <div className="post_by">By {post.author}</div>
        <div className="time_stamp">{post.time}</div>
      </PostDetails> */}
      <Content>
        <div className="post_title">{post.title}</div>
        <div className="post_content">{post.content}</div>
      </Content>
      {/* <Cta>
        <Link to="/" className="read_more">
          Read more
        </Link>
      </Cta> */}
    </Card>
  );
};


const Card = styled.div`
  /* p  */
  display: grid;
  grid-template-columns: 30% auto;
  grid-gap: 30px;
  width: 200px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  padding: 20px;

  .read_more {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
const Image = styled.div`
  border-radius: 5px;
  overflow: hidden;
  /* object-fit: cover; */
  width: 100%;
  img {
    width: 100%;
  }
`;
const PostDetails = styled.div`
  /* p  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #33f;
`;
const Content = styled.div`
  /* p  */
  .post_title {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    margin-bottom: 15px;
  }
  .post_content {
    font-size: 12px;
    font-weight: 100;
    color: #011;
    margin-bottom: 15px;
  }
`;
export default FeaturedBlogs;
