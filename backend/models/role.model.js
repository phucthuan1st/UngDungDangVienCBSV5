const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Role = sequelize.define("Role", {
    // ID is student ID or employee ID, same with school ID
    RoleName: {
        type: Sequelize.DataTypes.TEXT,
        primaryKey: true,
        unique: true,
    },
    SecurityLevel: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
    },
});

module.exports = LoginCredentials;
