let express = require("express");
const connection=require("./config/db");
const {authenticate}=require("./middlewares/authenticate.middleware")
const { userRouter } = require("./routes/user.route");
require("dotenv").config();
const cors = require("cors");

let app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", userRouter);
app.use(authenticate);

app.listen(process.env.port, async() => {
  try {
    await connection;
    console.log(`port is running on ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});




