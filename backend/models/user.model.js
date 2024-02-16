const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const User = sequelize.define("User", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Username: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    Pass: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    FirstName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    LastName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    BirthDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    StudentID: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    OfficerID: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    Hometown: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    DateJoinPartyCommittee: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    },
    PhoneNumber: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    Email: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    PartyMembershipCardCode: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    RoleID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = User;
