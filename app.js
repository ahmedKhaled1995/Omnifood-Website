// importing path from local lib
const path = require("path");

// importing express npm
const express = require("express");
const { env } = require("process");

// setting up port
const port = process.env.PORT || 3000;

// statring an setting up express app
const app = express();
const publicStaticPathDirectory = path.join(__dirname);
app.use(express.static(publicStaticPathDirectory));
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
