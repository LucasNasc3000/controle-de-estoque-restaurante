/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('inputs', 'status', {});
  },

  async down(queryInterface) {
    await queryInterface.dropTable('inputs');
  },
};
