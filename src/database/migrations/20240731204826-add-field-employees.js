/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'employees',
      'address_allowed',
      {
        type: Sequelize.CHAR,
        allowNull: true,
      },
    );
  },

  down: () => {},
};
