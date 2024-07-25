/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'inputs',
      'minimun_quantity',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: () => {},
};
