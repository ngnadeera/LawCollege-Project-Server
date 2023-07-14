module.exports = (sequelize, DataTypes) => {
  const GEA_contact = sequelize.define("GEA_contact", {
    GEApplicantID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    ContactNumberMobile: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    ContactNumberResident: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
  });

  GEA_contact.associate = (models) => {
    GEA_contact.belongsTo(models.GEA_personal_details, {
      foreignKey: "GEApplicantID",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return GEA_contact;
};
