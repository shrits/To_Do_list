import express from "express";
import connect from "./DB_Connection.js";
import Controller from "./Controller.js";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import dotenv from "dotenv";

//environment variable

dotenv.config();

const [renderPage, addActivity, updateActivity, deleteActivity, addActivityfn, updateActivityfn, deleteActivityfn] = Controller;
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT|| 2000;

//init app

const app = express();

//Establish connection with Database

connect();

// view engine

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "Public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", renderPage); 
app.get("/add-todo", addActivity);
app.get("/update-todo", updateActivity);
app.get("/delete-todo", deleteActivity);

app.post("/add-todo", addActivityfn);
app.post("/update-todo/:id", updateActivityfn);

app.get("/confirm-delete", deleteActivityfn);


// listen server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});
