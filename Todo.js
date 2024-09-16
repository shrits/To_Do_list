import mongoose from "mongoose";

const Todo = mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    completed: Boolean,
    dueDate: Date,
    priority: String
},
{ timestamps: true})

export default mongoose.model('Todo', Todo);