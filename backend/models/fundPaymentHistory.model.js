const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const FundPaymentHistory = sequelize.define("FundPaymentHistory", {
    ComradeId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    FundOfMonth: {
        type: Sequelize.DataTypes.DATEONLY,
        primaryKey: true,
    },
    PaymentTime: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
    },
    SignedByFundKeeper: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
    },
});

module.exports = FundPaymentHistory;
