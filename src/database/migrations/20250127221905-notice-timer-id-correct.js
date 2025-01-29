/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('notice', 'timer_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('notice');
  },
};
