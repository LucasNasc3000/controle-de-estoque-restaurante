/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('outputs', 'outputsweightperunit', 'weightperunit'),

  down: () => {},
};
