import express from "express";
import connect from "./DB_Connection.js";
import Controller from "./Controller.js";

const [renderPage,addActivity] = Controller;

const PORT = 2000;

//init app

const app = express();

//Establish connection with Database

connect();

// view engine

app.set("view engine", "ejs");

app.get("/", renderPage); 
app.get("/add-todo", addActivity);

// listen server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});