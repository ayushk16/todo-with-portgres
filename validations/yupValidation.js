const yup = require("yup");

const todoInputSchema = yup.object().shape({
    "text": yup.string().required(),
    "isCompleted": yup.bool().required()
})

const validate = async (req, res, next) => {
    try {
        const data = {
            "text": req.body.text,
            "isCompleted": req.body.isCompleted
        }
        const isValid = await todoInputSchema.isValid(data);
        if (isValid) {
            next();
        }
        else {
            res.status(406).json({ "error": "Not acceptable response." });
        }

    } catch (error) {
        res.status(406).json({ "error": "Not acceptable response." });
    }
}

module.exports = validate;