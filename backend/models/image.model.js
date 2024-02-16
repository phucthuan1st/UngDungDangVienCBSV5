const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const Image = sequelize.define("Image", {
    Identifier: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    Base64Image: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    UploadTime: {
        type: Sequelize.DataTypes.TIMESTAMP,
        allowNull: false,
    },
    IsAvatar: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
    },
});

module.exports = Image;
