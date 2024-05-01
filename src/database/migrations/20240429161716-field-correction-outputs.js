/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'outputs',
      'type',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down: () => {},
};
