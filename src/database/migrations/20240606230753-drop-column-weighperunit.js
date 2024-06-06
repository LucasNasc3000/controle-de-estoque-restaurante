/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'outputs',
      'weightperunit',
      {},
    );
  },

  down: () => {},
};
