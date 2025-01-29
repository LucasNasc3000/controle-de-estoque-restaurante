/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notice', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: 1,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hour: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      timer_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sale_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('notice');
  },
};
