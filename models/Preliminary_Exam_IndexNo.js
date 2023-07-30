module.exports = (sequelize, DataTypes) => {
  const Preliminary_Exam_IndexNo = sequelize.define(
    "Preliminary_Exam_IndexNo",
    {
      IndexNo: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      AppID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false, // Set this to false if the view doesn't have timestamp columns
    }
  );
  Preliminary_Exam_IndexNo.associate = (models) => {
    Preliminary_Exam_IndexNo.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Preliminary_Exam_IndexNo.belongsTo(models.Preliminary_Exam_Regisration, {
      foreignKey: "AppID",
      as: "registration",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Preliminary_Exam_IndexNo;
};
