/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'users',
      'permission',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down: () => {},
};
