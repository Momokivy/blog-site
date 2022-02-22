/*-------------
 *  app.js
 *-----------*/

//Imports
const express = require('express');
const helmet = require('helmet');

// Initializes the app
const app = express();

//Settings

//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

app.use(helmet());

//Handle gets
const handleGet = (req, res) => {
  res.sendFile("html/index.html", {root: __dirname});
}

app.get("/", handleGet);

//Handle posts

//Run app
app.listen(1337);
