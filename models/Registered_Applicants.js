module.exports = (sequelize, DataTypes) => {
  const Registered_Applicants = sequelize.define(
    "Registered_Applicants",
    {
      RegNo: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Registered_Applicants.associate = (models) => {
    Registered_Applicants.belongsTo(models.GEA_personal_details, {
      foreignKey: "GEApplicantID",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Registered_Applicants;
};
