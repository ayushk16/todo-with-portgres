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

    res.status(201).json({ "status": "created", "todo": todo })
}

const getAllTodo = async (req, res) => {

    let todos = await Todo.findAll({});

    res.status(200).json({ "todos": todos });

}

const getTodo = async (req, res, next) => {
    const id = req.params.id;

    let todo = await Todo.findOne({ where: { id: id } });
    if (!todo) {
        const error = new Error('todo not found');
        error.status = "not found";
        error.statusCode = 404;
        next(error)
    } else {
        res.status(200).json(todo);
    }

}

const updateTodo = async (req, res, next) => {
    const id = req.params.id;
    let isTodo = await Todo.findOne({ where: { id: id } });

    if (!isTodo) {
        const error = new Error('todo not found');
        error.status = "id not found";
        error.statusCode = 404;
        next(error)
    }
    else {
        let todo = await Todo.update(req.body, { where: { id: id } });
        let updatedTodo = await Todo.findOne({ where: { id: id } });
        res.status(202).json({
            "status": "Updated",
            "todo": updatedTodo
        });
    }
}


const deleteTodo = async (req, res, next) => {
    const id = req.params.id;
    let isTodo = await Todo.findOne({ where: { id: id } });

    if (!isTodo) {
        const error = new Error('todo not found');
        error.status = "id not found";
        error.statusCode = 404;
        next(error)
    }
    else {
        await Todo.destroy({ where: { id: id } });
        res.status(200).json({ "deleted": id });
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    getTodo,
    updateTodo,
    deleteTodo,
}