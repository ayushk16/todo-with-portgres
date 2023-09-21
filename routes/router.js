const { Router } = require("express");
const controller = require("../controller/controller.js");
const validate = require('../validations/yupValidation.js');

const router = Router();

router.post('/', validate, controller.addTodo);

router.get('/', controller.getAllTodo);

router.get('/:id', controller.getTodo);

router.put('/:id', validate, controller.updateTodo);

router.delete('/:id', controller.deleteTodo);


module.exports = router;