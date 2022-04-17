import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import styled from "styled-components";
import CreateBlog from "./pages/blogs/CreateBlog";
import BlogDetail from "./pages/blogs/BlogDetail";
import BlogEdit from "./pages/blogs/BlogEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cont>
        <Routes className="pages">
          <Route path="/" exact element={<Home />} />
          <Route path="/create" exact element={<CreateBlog />} />
          <Route path="/blog/:id" exact element={<BlogDetail />} />
          <Route path="/blogEdit/:id" exact element={<BlogEdit />} />
        </Routes>
      </Cont>

      {/* <Footer /> */}
    </div>
  );
}

const Cont = styled.div`
  padding-top: 15vh;
`;

export default App;
