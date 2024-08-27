"use strict";/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameTable(
      'users',
      'employees',
    );
  },

  down: () => {},
};
