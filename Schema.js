import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    completed: Boolean,
    dueDate: Date,
    priority: String,
    createdAt: { type: Date, timestamps: true}
})

export default mongoose.model('Todo', todoSchema);