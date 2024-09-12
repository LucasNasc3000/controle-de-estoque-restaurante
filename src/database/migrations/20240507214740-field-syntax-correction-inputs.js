/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('inputs', 'quatity', 'quantity'),

  down: () => {},
};
