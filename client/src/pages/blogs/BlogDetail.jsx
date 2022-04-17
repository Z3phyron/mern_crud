import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
// import { useBlog } from "../../hooks/BlogContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const BlogDetail = (props) => {
  // const { blogs } = useBlog();
  const [blog, setBlog] = useState({});
  const id = useLocation().pathname.split("/").pop();
  const navigate = useNavigate();
  const imgUrl = "/assets/images/";

  console.log(id);
  useEffect(() => {
    const getBlog = async () => {
      await axios.get(`/blogs/${id}`).then((data) => {
        setBlog(data.data);
      });
    };

    getBlog();
  }, []);

  const deleteBlog = (id) => {
    console.log(id);
    axios.delete(`/blogs/delete/${id}`).then((result) => {
      console.log(result);
      navigate("/");
    });
    //  setBlog(blog.filter(elem => elem._id !== id))
  };
  // console.log(blog.title.substring(1, 4));
  return (
    <Cont>
      <PostDetails>
        <Image>
          <img src={imgUrl + blog.image} alt="" />
        </Image>
        <Title>{blog.title}</Title>
        <Content>{blog.content}</Content>
        <div className="btn_group">
          <Cta>
            <Link to={`/blogEdit/${blog._id}`} className="read_more">
              Edit
            </Link>
          </Cta>
          <Cta>
            <Button className="outline" onClick={() => deleteBlog(blog._id)}>
              Delete
            </Button>
          </Cta>
        </div>
      </PostDetails>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 15vh 5% 5vh;
`;
const PostDetails = styled.div`
  /* p  */

  .btn_group {
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    margin-top: 10vh;
    .read_more {
      /* position: absolute;
      right: 0;
      bottom: 0; */
      /* border-radius  */
    }
  }
`;
const Image = styled.div`
  /* p  */
  width: 100%;
  img {
    width: 100%;
  }
`;
const Title = styled.div`
  /* p  */
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Content = styled.div`
  /* p  */
  font-size: 17px;
  font-weight: 200;
  color: gray;
`;
// const Featuredpost = styled.div`
//   /* p  */
// `;
export default BlogDetail;
