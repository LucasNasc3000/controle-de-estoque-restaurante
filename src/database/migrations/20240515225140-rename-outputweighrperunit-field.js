// your migration-file.js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('outputs', 'outputsweightperunit', 'weightperunit');
  },

  down: () => {}
};
