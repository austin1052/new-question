const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 5000;
// const client = require("./database/client");

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // try {
  //   await client.connect();
  //   console.log("Database is open for business!");
  // } catch (error) {
  //   console.error("Database is closed for repairs!\n", error);
  // }
})