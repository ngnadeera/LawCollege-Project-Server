module.exports = (sequelize, DataTypes) => {
    const GEA_ol_tamil = sequelize.define("GEA_ol_tamil", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      TypeOfEdInstitute: {
        type: DataTypes.STRING(30),
        
      },
      Year: {
        type: DataTypes.STRING(5),
        
      },
      Month: {
        type: DataTypes.STRING(15),
        
      },
      IndexNo: {
        type: DataTypes.STRING(15),
        
      },
      Result: {
        type: DataTypes.STRING(15),
        
      },
    });
  
    GEA_ol_tamil.associate = (models) => {
        GEA_ol_tamil.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_ol_tamil;
  };
  