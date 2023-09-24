const { Router } = require("express");
const controller = require("../controller/controller.js");
const validate = require('../validations/yupValidation.js');
const validateUrl = require('../validations/urlvalidation.js');


const router = Router();

router.post('/', validate, controller.addTodo);

router.get('/', controller.getAllTodo);

router.get('/:id', validateUrl, controller.getTodo);

router.put('/:id', validateUrl, validate, controller.updateTodo);

router.delete('/:id', validateUrl, controller.deleteTodo);


module.exports = router;