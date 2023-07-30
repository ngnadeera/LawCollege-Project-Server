module.exports = (sequelize, DataTypes) => {
  const Exam_Withdrawal = sequelize.define(
    "Exam_Withdrawal",
    {
      IndexNo: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      Exam: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Set this to false if the view doesn't have timestamp columns
    }
  );
  Exam_Withdrawal.associate = (models) => {
    
    Exam_Withdrawal.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Exam_Withdrawal;
};
