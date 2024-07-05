/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'logs',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    );
  },

  down: () => {},
};
