module.exports = (sequelize, DataTypes) => {
  const Student_Status = sequelize.define(
    "Student_Status",
    {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      PreYearReg: {
        type: DataTypes.BOOLEAN,
      },
      IntYearReg: {
        type: DataTypes.BOOLEAN,
      },
      FinalYearReg: {
        type: DataTypes.BOOLEAN,
      },
      PreExamPass: {
        type: DataTypes.BOOLEAN,
      },
      PreAttempts: {
        type: DataTypes.BOOLEAN,
      },
      IntExamPass: {
        type: DataTypes.BOOLEAN,
      },
      IntAttempts: {
        type: DataTypes.BOOLEAN,
      },
      FinalExamPass: {
        type: DataTypes.BOOLEAN,
      },
      FinalAttempts: {
        type: DataTypes.BOOLEAN,
      },
      ApprenticeshipReg: {
        type: DataTypes.BOOLEAN,
      },
      ApprenticeshipPass: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );

  Student_Status.associate = (models) => {
    Student_Status.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Student_Status;
};
