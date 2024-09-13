import express from 'express';
import connect from './DB_Connection.js';

const PORT = 2000;

//init app

const app = express();

//Establish connection with Database

connect();

// view engine

app.set('view engine', 'ejs');

// listen server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});