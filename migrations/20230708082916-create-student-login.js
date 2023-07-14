"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Student_logins", {
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "GEA_personal_details",
          key: "NIC",
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      StudentID: {
        type: Sequelize.STRING(10),
        allowNull: false,
        references: {
          model: "GEA_personal_details",
          key: "GEApplicantID",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Student_logins");
  },
};
