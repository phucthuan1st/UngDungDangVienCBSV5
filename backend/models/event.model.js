const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Event = sequelize.define("PartyEvent", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    EventName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    EventDetail: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    StartedTime: {
        type: Sequelize.DataTypes.TIMESTAMP,
        allowNull: false,
    },
    FinishedTime: {
        type: Sequelize.DataTypes.TIMESTAMP,
        allowNull: true,
    },
    Place: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = Event;
