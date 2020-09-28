'use strict';

var bcrypt = require('bcryptjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userId: "4",
      email: "admin@mail.pt",
      username: "admin",
      hashPassword: bcrypt.hashSync("admin", 8),
      nome: "admin",
      isAdmin: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
