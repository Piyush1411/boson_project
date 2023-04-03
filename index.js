/*Importing express  */
const express = require("express");

const app = express();

const port = 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route for home
app.use("/", require("./routes/index"));

// app.post("/create-task", (req, res) => {
//   res.send("hello");
// });

app.listen(port, () => {
  console.log(`server is running on PORT ${port}`);
});
