const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB");

const app = express();

PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    })
  )
  .catch(() => {
    console.log("Error while listing Server");
  });
