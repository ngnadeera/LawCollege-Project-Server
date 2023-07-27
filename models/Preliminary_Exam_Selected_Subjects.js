module.exports = (sequelize, DataTypes) => {
  const Preliminary_Exam_Selected_Subjects = sequelize.define(
    "Preliminary_Exam_Selected_Subjects",
    {
      AppID: {
        type: DataTypes.STRING(10),
        allowNull: false,
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
      }
    },
    {
      timestamps: false,
    }
  );
  Preliminary_Exam_Selected_Subjects.associate = (models) => {


    Preliminary_Exam_Selected_Subjects.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Preliminary_Exam_Selected_Subjects.belongsTo(models.Preliminary_Exam_Regisration, {
      foreignKey: "AppID",
      as: "appID",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Preliminary_Exam_Selected_Subjects.belongsTo(models.Subjects, {
      foreignKey: "SubjectID",
      as: "subject",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

  };
  return Preliminary_Exam_Selected_Subjects;
};
