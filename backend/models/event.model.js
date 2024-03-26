const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Event = sequelize.define("Event", {
    EventId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    EventName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    EventDetails: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    StartedTime: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    FinishedTime: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    },
    Location: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = Event;
