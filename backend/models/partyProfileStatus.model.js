const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const PartyProfileStatus = sequelize.define("PartyProfileStatus", {
    ModifiedOn: {
        type: Sequelize.DataTypes.DATE,
        primaryKey: true,
    },
    ProfileId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    GuidingComradeId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    ModifiedDescription: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = PartyProfileStatus;
