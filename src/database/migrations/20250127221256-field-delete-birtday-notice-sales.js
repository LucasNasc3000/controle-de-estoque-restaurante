/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('sales', 'birthday_notice');
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  },
};
