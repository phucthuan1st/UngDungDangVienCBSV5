const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const LoginCredentials = sequelize.define("LoginCredentials", {
    // ID is student ID or employee ID, same with school ID
    profileId: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.DataTypes.STRING(20),
        unique: true,
        primaryKey: true,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            len: {
                args: [12, 1000], // Minimum of 12 characters, maximum of 1000
                msg: "Password must be at least 12 characters long",
            },
        },
        allowNull: false,
    },
});

module.exports = LoginCredentials;
