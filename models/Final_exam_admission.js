module.exports = (sequelize, DataTypes) => {
    const Final_exam_admission = sequelize.define(
      "Final_exam_admission",
      {
        IndexNo: {
          type: DataTypes.STRING(10),
          primaryKey: true,
        },
        RegNo: {
          type: DataTypes.STRING(10),
        },
        SubjectID: {
          type: DataTypes.STRING(10),
          primaryKey: true,
        },
        Medium: {
          type: DataTypes.STRING(10),
        },
        Date: {
          type: DataTypes.DATEONLY,
        },
        Time: {
          type: DataTypes.STRING(20),
        },
        ExamCenter: {
          type: DataTypes.STRING(50),
        },
      },
      {
        timestamps: false,
      }
    );
    Final_exam_admission.associate = (models) => {
      Final_exam_admission.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Final_exam_admission.belongsTo(models.Subjects, {
        foreignKey: "SubjectID",
        as: "subjects",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  
  
    return Final_exam_admission;
  };
  