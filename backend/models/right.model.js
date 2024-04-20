const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Right = sequelize.define("Right", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    RoleID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    RightName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Right;
