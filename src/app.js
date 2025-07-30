const express = require("express");
const connectDB = require("./db/db");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const limiter = require("./middleware/ratelimit.middleware");
const errorHandler = require("./middleware/errorHandler");
const postRouter = require("./routes/post.routes");
const app = express();


connectDB();
app.use(limiter);
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/post", postRouter);

module.exports = app;