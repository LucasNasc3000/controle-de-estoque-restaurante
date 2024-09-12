/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'outputs',
      'undefined',
      'employee_id',
    );
  },

  down: () => {},
};
