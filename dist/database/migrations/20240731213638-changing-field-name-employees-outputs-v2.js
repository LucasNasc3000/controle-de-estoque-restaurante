"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'outputs',
      'undefined',
      'employee_id',
    );
  },

  down: () => {},
};
