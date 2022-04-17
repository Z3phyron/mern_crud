import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
// import { useBlog } from "../../hooks/BlogContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { InputHandler } from "concurrently";

const BlogEdit = () => {
  // const { blogs } = useBlog();
  const [blog, setBlog] = useState({});

  const id = useLocation().pathname.split("/").pop();
  // const navigate = useNavigate()

  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [inputField, setInputField] = useState({
    image: "",
    title: "",
    content: "",
  });
  console.log(id);

  useEffect(() => {
    const getBlog = async () => {
      await axios.get(`/blogs/${id}`).then((data) => {
        setBlog(data.data);
        const imgUrl = `/assets/images/${data.data.image}`;
        // setFile(imgUrl);
        setInputField({
          image: imgUrl,
          title: data.data.title,
          content: data.data.content,
        });
      });
    };

    getBlog();
  }, []);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(blog);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blog._id);
    const newPost = {
      // username: user.username,
      _id: blog._id,
      title: inputField.title,
      content: inputField.content,
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios
        .post(`/blogs/update/${id}`, newPost)
        .then((res) => console.log(res.data));
      //   window.location.replace("/blog/" + res.data._id);
    } catch (err) {}
  };

  const imgUrl = "/images/";

  return (
    <Cont>
      <Wrap>
        <h3 className="heading">Create a new Blog</h3>
        {file ? (
          <Image>
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          </Image>
        ) : (
          <Image>
            <img src={inputField.image} alt="" />
          </Image>
        )}

        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputField>
              <Input
                type="file"
                name="image"
                // onChange={onChangeFile}
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setFile(e.target.files[0])}
                // value={file}
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="title"
                label="Title"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.title}
                // defaultValue={blog.title}
              />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="content"
                label="Content"
                variant="outlined"
                className="content"
                onChange={inputsHandler}
                value={inputField.content}
                // defaultValue={content}
              />
            </InputField>
          </FormControl>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 15vh 5% 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  /* max-height: 200px; */
  margin-bottom: 30px;
  img {
    width: 100%;
  }
`;
const Wrap = styled.div`
  /* p  */
  width: 50%;
  margin: auto;
  border: 1px solid #002;
  padding: 50px;
  border-radius: 20px;
  /*  */

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;
    font-size: 30px;
  }
`;
const Form = styled.form`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  button {
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;
const FormControl = styled.div`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;
const InputField = styled.div`
  /* p  */
  width: 100%;
`;
const Input = styled.input`
  /* p  */
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.05);
`;
const TextArea = styled.textarea`
  /* p  */
  width: 100%;
  height: 15vh;
  padding: 20px 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.05);
`;

export default BlogEdit;
