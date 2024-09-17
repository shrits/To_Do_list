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
        const  id  = req.query.id;
        const todo = await Todo.findById(id);

        res.render("UpdateToDoPage", {title: "Update Activity ", todo: todo});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }
const deleteActivity = async (req, res, next) => {
    try {
        const  id  = req.query.id;
        res.render("DeleteToDoPage", {title: "Delete Activity ", id});
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

const updateActivityfn = async (req, res, next) => {   
    try {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description; 

        const todo = await Todo.findById(id);
        if (!todo){
            return res.status(404).json({ message: "Activity not found." });
        }

        todo.title = title;
        todo.description = description;

        await todo.save();

        res.redirect("/");
        } 
    catch (error) {
        res.status(500).json({ message: error.message });
                }
    }

const deleteActivityfn = async (req, res, next) => {
    try {
        const {id, confirm} = req.query;
        
        if(confirm === "yes"){
            await Todo.findByIdAndDelete(id);
        }
        res.redirect("/");
        } 
    catch (error) {
        res.status(500).json({ message: error.message });
                }
    }
export default [renderPage, addActivity, updateActivity, deleteActivity, addActivityfn, updateActivityfn, deleteActivityfn];