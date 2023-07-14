module.exports = (sequelize, DataTypes) => {
    const GEA_al = sequelize.define("GEA_al", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Scheme: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      IndexNo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Year: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      IndexNo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Month: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Medium: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      TypeOfEdInstitute: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    });
  
    GEA_al.associate = (models) => {
        GEA_al.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_al;
  };
  