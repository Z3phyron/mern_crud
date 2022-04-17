import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BlogProvider} from './hooks/BlogContext'

ReactDOM.render(
  <React.StrictMode>
    <BlogProvider>
      <Router>
      <App />
    </Router>
    </BlogProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
