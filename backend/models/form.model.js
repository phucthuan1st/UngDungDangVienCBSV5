const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Form = sequelize.define("Form", {
    FormId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    Description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    TemplateLink: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Form;
