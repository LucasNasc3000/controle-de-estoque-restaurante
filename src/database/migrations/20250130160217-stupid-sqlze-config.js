/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.renameTable('notice', 'notices');
  },

  async down(queryInterface) {
    await queryInterface.dropTable('notices');
  },
};
