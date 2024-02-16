const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const PartyProfileStatus = sequelize.define("PartyProfileStatus", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    StatusName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = PartyProfileStatus;
