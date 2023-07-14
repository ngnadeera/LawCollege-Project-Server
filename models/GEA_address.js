module.exports = (sequelize, DataTypes) => {
    const GEA_address = sequelize.define("GEA_address", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      PermanentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Province: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      DistrictSecretariant: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      GramaNiladariDivision: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
    });
  
    GEA_address.associate = (models) => {
        GEA_address.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_address;
  };