import Todo from "./Todo.js";
import moment from "moment";

//render functions
const renderPage = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({createdAt: 1});

        res.locals.time = moment;

        res.render("Index", {title: "List of Activities ", todos: todos});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const addActivity = async (req, res, next) => {
    try {
        res.render("NewToDoPage", {title: "Add Activity "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const updateActivity = async (req, res, next) => {
    try {
        const {id} = req.query.id;
        const todo = await Todo.findById(id);


        res.render("UpdateToDoPage", {title: "Update Activity ", todo});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }
const deleteActivity = async (req, res, next) => {
    try {
        res.render("DeleteToDoPage", {title: "Delete Activity "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }    


// todo functionalities

const addActivityfn = async (req, res, next) => {
    try {
       const title = req.body.title;
       const description = req.body.description;
       const newActivity = new Todo({title: title, description: description});
       await newActivity.save();

       res.redirect("/");
        } 
    catch (error) {
        res.status(500).json({ message: error.message });
                }
    }
export default [renderPage, addActivity, updateActivity, deleteActivity, addActivityfn];