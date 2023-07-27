module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define(
    "Subjects",
    {
      SubjectID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      SubjectName: {
        type: DataTypes.STRING(70),
      },
      Type: {
        type: DataTypes.BOOLEAN,
      },
      Level: {
        type: DataTypes.INTEGER(1),
      },
    },
    {
      timestamps: false,
    }
  );
  Subjects.associate = (models) => {
    Subjects.hasMany(models.Preliminary_Exam_Selected_Subjects, {
      foreignKey: "SubjectID",
      as: "subject",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
  return Subjects;
};
