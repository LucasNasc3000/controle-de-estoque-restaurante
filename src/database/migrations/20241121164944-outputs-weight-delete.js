/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('outputs', 'weight');
  },

  async down(queryInterface) {
    await queryInterface.dropTable('outputs');
  },
};
