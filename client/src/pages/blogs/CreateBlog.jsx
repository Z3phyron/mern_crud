import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateBlog = (props) => {
  const { user } = props;
  console.log(user?.firstName);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setAuthor()
    // console.log(author)
    const newBlog = {
      author: user?.firstName,
      title,
      content,
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      newBlog.image = filename;
      try {
        await axios.post("/api/upload/", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/blogs/add", newBlog);
      // window.location.replace("/blog/" + res.data._id);
    } catch (err) {}
  };

  return (
    <Cont>
      <h3 className="heading">Create a new Blog</h3>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
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
              // value={image}
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
              onChange={(e) => setTitle(e.target.value)}
              // value={inputField.title}
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
              onChange={(e) => setContent(e.target.value)}
              // value={inputField.content}
            />
          </InputField>
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Form>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 15vh 5% 0;

  .writeImg {
    width: 300px;
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

  .content {
    height: 100px;
  }
`;

const Input = styled.input`
  /* p  */
`;

export default CreateBlog;
