
module.exports = function (sequelize, Sequelize) {

    var Requests = sequelize.define("requests", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        requestStatus: {
            type: Sequelize.BOOLEAN,
            notEmpty: true
        },

        bearingCost: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        requestType: {
            type: Sequelize.TEXT
        },

        objective: {
            type: Sequelize.TEXT
        },

        note: {
            type: Sequelize.TEXT,
            validate: {
                isEmail: true
            }
        },

        futureWork: {
            type: Sequelize.TEXT,
            allowNull: true
        },

        last_login: {
            type: Sequelize.DATE
        }


    });

    return Requests;

}
