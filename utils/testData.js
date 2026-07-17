const env = require('../config/env');


const testData = {

    validUser: {

        username: env.username,

        password: env.password

    },


    checkoutUser: {

        firstName: "Periyasamy",

        lastName: "Muthu",

        postalCode: "600001"

    }

};


module.exports = testData;
