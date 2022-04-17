const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const blogs = require("./Routes/Blog.js");
const path = require("path");
const multer = require("multer");

dotenv.config();

const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV || "production";

const DataBase = process.env.MONGO_URI || "mongodb+srv://z3phie:betty234@prac.54rbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  "/assets/images",
  express.static(path.join(__dirname, "/assets/images"))
);
// app.use('/assets/images/profile_pics', express.static(path.join(__dirname, 'assets/images/profile_pics')))

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

const blogStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: blogStorage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file uploaded");
});
app.put("/api/update", upload.single("file"), (req, res) => {
  res.status(200).json("file updated");
});

app.use("/blogs", blogs);



// db setup
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DataBase...");
  })
  .catch((err) => {
    console.log("err", err);
  });

// Serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "dist", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//run server
app.listen(PORT, () => {
  console.log("Server Running...........................");
});
