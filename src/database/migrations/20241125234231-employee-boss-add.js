/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('employees', 'boss', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('employees');
  },
};
