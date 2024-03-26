const Sequelize = require("sequelize-cockroachdb");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

console.log(process.env.connectionString);

const sequelize = new Sequelize(process.env.connectionString, {
    logging: true,
});

module.exports = sequelize;
