/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'inputs',
      'user_id',
      'employee_id',
    );
  },

  down: () => {},
};
