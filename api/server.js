import express from "express";
const app = express();

import cors from "cors";
import morgan from "morgan";

const PORT = 8000;

// middlewares
// express.json converts the json format into object to be catch by the server
app.use(express.json());
app.use(cors()); // allow cross origine access from diffrent server frontend app
app.use(morgan("dev")); // log all the server requestes

// DB connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// router
import userRouter from "./src/routers/userRouter.js";
app.use("/users", userRouter);

// request handeler
app.use("/", (req, res) => {
  res.json({
    message: "hellwo wrold",
  });
});

// run node app in the web server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is spinning at http://localhost:${PORT}`);
});
