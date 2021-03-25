const express = require("express");
const cors = require("cors"); //cross origin resouce origin
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Conexion con la mongoDB establecida correctamente.");
});

// const loginRouter = require("./routes/login");
// const signupRouter = require("./routes/signup");
const userRouter = require("./routes/user");
const projectRouter = require(".routes/projects");
const bugRouter = require(".routes/bugs");

// app.use("/login", loginRouter);
// app.use("/signup", signupRouter);
app.user("/bug", bugRouter);
app.use("/project", projectRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server corriendo en el puerto ${port}`);
});
