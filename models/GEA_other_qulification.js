module.exports = (sequelize, DataTypes) => {
    const GEA_other_qulification = sequelize.define("GEA_other_qulification", {
      GEApplicantID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Category: {
        type: DataTypes.STRING(70),
        
      },
      ExamName: {
        type: DataTypes.STRING(35),
        
      },
      InstituteName: {
        type: DataTypes.STRING(35),
        
      },
      CourseDuration: {
        type: DataTypes.STRING(5),
        
      },
      YearOfCompletion: {
        type: DataTypes.STRING(5),
        
      },
      IndexNo: {
        type: DataTypes.STRING(15),
        
      },
      Medium: {
        type: DataTypes.STRING(10),
        
      },
    });
  
    GEA_other_qulification.associate = (models) => {
        GEA_other_qulification.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return GEA_other_qulification;
  };