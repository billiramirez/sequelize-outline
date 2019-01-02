// creating a users migrations, this is a new file.
const Sequelize = require("sequelize");

/**
 *  In case we want to create the migration we set the UP
 * In case we wanto to drop the table, we set DOWN
 */

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            createdAt: {
                type: Sequelize.Date,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable("users");
    }
};