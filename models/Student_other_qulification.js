module.exports = (sequelize, DataTypes) => {
    const Student_other_qulification = sequelize.define("Student_other_qulification", {
      RegNo: {
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
    },{
      timestamps: false
    });
  
    Student_other_qulification.associate = (models) => {
      Student_other_qulification.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return Student_other_qulification;
  };