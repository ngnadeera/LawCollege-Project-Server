module.exports = (sequelize, DataTypes) => {
    const GEA_previous_sits = sequelize.define("GEA_previous_sits", {
        GEApplicantID: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
          },
          PYear: {
            type: DataTypes.STRING(5),
            allowNull: false,
            primaryKey: true,
          },
          PIndexNo: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          PMarksObtained: {
            type: DataTypes.STRING(20),
            allowNull: true,
          },
        });
      
        GEA_previous_sits.associate = (models) => {
            GEA_previous_sits.belongsTo(models.GEA_personal_details, {
              foreignKey: 'GEApplicantID',
              as: 'personalDetails',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          };

    return GEA_previous_sits;
};