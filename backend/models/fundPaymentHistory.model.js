const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const FundPaymentHistory = sequelize.define("FundPaymentHistory", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    FundOfMonth: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    PaymentTime: {
        type: Sequelize.DataTypes.Timestamp,
        allowNull: true,
    },
});

module.exports = FundPaymentHistory;
