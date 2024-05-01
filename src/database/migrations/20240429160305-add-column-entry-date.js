/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'inputs',
      'entrydate',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down: () => {},
};
