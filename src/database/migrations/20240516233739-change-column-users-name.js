/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('users', 'nome', 'name'),

  down: () => {},
};
