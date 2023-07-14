module.exports = (sequelize, DataTypes) => {
    const GEA_ol_sinhala = sequelize.define("GEA_ol_sinhala", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      TypeOfEdInstitute: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      Year: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      Month: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      IndexNo: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      Result: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    });
  
    GEA_ol_sinhala.associate = (models) => {
        GEA_ol_sinhala.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_ol_sinhala;
  };
  