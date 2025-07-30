const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const limiter = require("./middleware/ratelimit.middleware");
const errorHandler = require("./middleware/errorHandler");
const postRouter = require("./routes/post.routes");
const cors = require("cors");

const app = express();

app.use(limiter);
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use("/auth", authRouter);
app.use("/post", postRouter);

module.exports = app;
