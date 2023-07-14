module.exports = (sequelize, DataTypes) => {
    const GEA_convicted_offence = sequelize.define("GEA_convicted_offence", {
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
      
        GEA_convicted_offence.associate = (models) => {
            GEA_convicted_offence.belongsTo(models.GEA_personal_details, {
              foreignKey: 'GEApplicantID',
              as: 'personalDetails',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          };

    return GEA_convicted_offence;
};