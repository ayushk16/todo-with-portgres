const db = require('../models/index')
const { todoInputSchema } = require('../validations/yupValidation.js');
// const yup = require("yup");

const Todo = db.todos;


const addTodo = async (req, res) => {
    const data = {
        "text": req.body.text,
        "isCompleted": req.body.isCompleted
    }
    let todo = await Todo.create(data);

    res.status(201).json({ "status": "todo created" })
}

const getAllTodo = async (req, res) => {

    let todos = await Todo.findAll({});

    res.status(200).json({ "todos": todos });

}

const getTodo = async (req, res) => {
    const id = req.params.id;
    let todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
        res.status(404).json({ error: "not found" })
    } else {
        res.status(200).json(todo);
    }

}

const updateTodo = async (req, res) => {
    const id = req.params.id;
    let todo = await Todo.update(req.body, { where: { id: id } });
    res.status(202).json({ "status": "Accepted" });
}


const deleteTodo = async (req, res) => {
    const id = req.params.id;

    await Todo.destroy({ where: { id: id } });
    res.status(204).json({ deleted: id });
}

module.exports = {
    addTodo,
    getAllTodo,
    getTodo,
    updateTodo,
    deleteTodo,
}