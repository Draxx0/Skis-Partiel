const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const postRouter = require("./src/routers/post.router");
const bookingRouter = require("./src/routers/booking.router");
const commentRouter = require("./src/routers/comment.router");
const connect = require("./config/mongoose.config");

connect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", postRouter);
app.use("/api", bookingRouter);
app.use("/api", commentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
