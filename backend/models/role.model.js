const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Role = sequelize.define("Role", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    RoleName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Role;
