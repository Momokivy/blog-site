/*-------------
 *  app.ts
 *-----------*/

//Imports
import express from "express";
import helmet from "helmet";

// Initializes the app
const app: express.Application = express();

//Settings
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

app.use(helmet());

//Handle gets
const handleGet = (req: express.Request, res: express.Response) => {
  res.sendFile("./views/index.html");
}

app.get("/", handleGet);

//Handle posts

//Run app
app.listen(1337);
