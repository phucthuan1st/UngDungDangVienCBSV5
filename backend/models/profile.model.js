const Sequelize = require("sequelize-cockroachdb");
const sequelize = require("../config/Database");

const validator = require("validator");

const Profile = sequelize.define("Profile", {
    // ID í student ID or employee ID, same with school ID
    ProfileId: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: false,
        unique: true,
        primaryKey: true,
    },
    // Ten
    FirstName: {
        type: Sequelize.DataTypes.TEXT(10),
        allowNull: false,
    },
    // Ho lot
    LastName: {
        type: Sequelize.DataTypes.TEXT(30),
        allowNull: false,
    },
    Gender: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    // Ngay sinh
    Birthday: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
    },
    // Que quan
    Hometown: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    // Ngay vao Dang
    JoinPartyDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
    },
    RoleName: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    AvatarLink: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    // So dien thoai
    PhoneNumber: {
        type: Sequelize.DataTypes.STRING(10),
        validate: {
            len: {
                // validate length
                args: [10, 10],
                msg: "Phone number must be exactly 10 digits",
            },
            isNumeric: true, // ensure only numbers are stored
        },
        allowNull: false,
        unique: true,
    },
    // Email
    Email: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false,
        unique: true,
        get() {
            // normalize email on retrieval (e.g., lowercase)
            return this.getDataValue("email").toLowerCase();
        },
        set(value) {
            // validate email before storing
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email address");
            }
            this.setDataValue("email", value);
        },
    },
});

module.exports = Profile;
