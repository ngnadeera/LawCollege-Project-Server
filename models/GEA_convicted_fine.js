module.exports = (sequelize, DataTypes) => {
    const GEA_convicted_fine = sequelize.define("GEA_convicted_fine", {
        GEApplicantID: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
          },
          Description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        });
      
        GEA_convicted_fine.associate = (models) => {
            GEA_convicted_fine.belongsTo(models.GEA_personal_details, {
              foreignKey: 'GEApplicantID',
              as: 'personalDetails',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          };

    return GEA_convicted_fine;
};