/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('advices', 'sale_id');
  },

  async down(queryInterface) {
    await queryInterface.dropTable('advices');
  },
};
