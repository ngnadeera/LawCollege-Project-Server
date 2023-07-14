module.exports = (sequelize, DataTypes) => {
    const GEA_al_results = sequelize.define("GEA_al_results", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      SubjectNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Subject: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      Grading: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
    });
  
    GEA_al_results.associate = (models) => {
        GEA_al_results.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_al_results;
  };