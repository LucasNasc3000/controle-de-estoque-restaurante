/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn(
      'inputs',
      'user_id',
      'employee_id',
    );
  },

  down: () => {},
};
