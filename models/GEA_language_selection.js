module.exports = (sequelize, DataTypes) => {
    const GEA_language_selection = sequelize.define("GEA_language_selection", {
        GEApplicantID: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
          },
          GKMedium: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          LanguageMedium: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
        });
      
        GEA_language_selection.associate = (models) => {
            GEA_language_selection.belongsTo(models.GEA_personal_details, {
              foreignKey: 'GEApplicantID',
              as: 'personalDetails',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          };

    return GEA_language_selection;
};