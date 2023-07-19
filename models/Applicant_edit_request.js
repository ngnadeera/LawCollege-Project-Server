module.exports = (sequelize, DataTypes) => {
  const Applicant_edit_request = sequelize.define("Applicant_edit_request", {
    GEApplicantID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EditAccess: {
      type: DataTypes.STRING(10),
        allowNull: false,
    },
    PaymentDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    BankName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    PaymentType: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ReferenceNumber: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  });

  Applicant_edit_request.associate = (models) => {
    Applicant_edit_request.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Applicant_edit_request.belongsTo(models.Applicant_signup, {
        foreignKey: "Username",
        as: "username",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  };

  return Applicant_edit_request;
};
