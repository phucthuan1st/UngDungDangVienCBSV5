const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Document = sequelize.define("Document", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DocumentDescription: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    DocumentLink: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Document;
