const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const UserAttendEvent = sequelize.define("UserAttendEvent", {
    UserID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    EventID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    CheckIn: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
    },
    CheckOut: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
    },
});

module.exports = UserAttendEvent;
