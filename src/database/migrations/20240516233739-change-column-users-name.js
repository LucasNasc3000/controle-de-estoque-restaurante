// your migration-file.js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'nome', 'name');
  },

  down: () => {}
};
