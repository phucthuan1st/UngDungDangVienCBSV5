const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const PartyProfileHistory = sequelize.define("PartyProfileHistory", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    ModifyOn: {
        type: Sequelize.DataTypes.TIMESTAMP,
        allowNull: false,
    },
    Detail: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    UserID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    PersonInChargeID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    ProfileStatusID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = PartyProfileHistory;
