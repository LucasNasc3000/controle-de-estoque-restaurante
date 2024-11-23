/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('outputs', 'type', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('outputs');
  },
};
