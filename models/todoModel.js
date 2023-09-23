const { sequelize } = require(".");

let todoSchema = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return Todo;
}

module.exports = todoSchema;