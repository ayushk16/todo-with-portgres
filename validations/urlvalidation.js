const yup = require("yup");

const todoInputSchema = yup.object().shape({
    "id": yup.number().required()
})

const validate = async (req, res, next) => {
    try {
        const data = {
            "id": req.params.id
        }
        const isValid = await todoInputSchema.isValid(data);
        if (isValid) {
            next();
        }
        else {
            res.status(404).json({ "error": "path not found." });
        }

    } catch (error) {
        res.status(404).json({ "error": "path not found." });
    }
}

module.exports = validate;