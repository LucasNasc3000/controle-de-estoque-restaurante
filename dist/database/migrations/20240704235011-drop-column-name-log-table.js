"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'logs',
      'name'
    );
  },

  down: () => {},
};
