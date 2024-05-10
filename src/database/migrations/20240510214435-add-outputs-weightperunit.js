/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'outputs',
      'outputsweightperunit',
      {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    );
  },

  down: () => {},
};
