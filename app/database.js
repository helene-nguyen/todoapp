//No need to call dotenv when destructure Sequelize
// require('dotenv').config();
//~import modules
const {
    Sequelize
} = require('sequelize');

//~connexion database
function getConnexion() {

    return new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USERNAME,
        process.env.DB_PWD,

        {
            define: {
                timestamps: false
            },

            host: process.env.DB_HOST,
            dialect: process.env.DB_ENV,
            logging: false
        }
    )
}

module.exports = getConnexion();