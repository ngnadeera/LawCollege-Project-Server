module.exports = (sequelize, DataTypes) => {
  const Preliminary_Lecture_Regisration = sequelize.define(
    "Preliminary_Lecture_Regisration",
    {
      RegNo: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      Year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ReferenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BankName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BranchName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      TypeOfPayment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateOfPayment: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      PaymentVerification: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      EligibilityVerification: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false, // Set this to false if the view doesn't have timestamp columns
    }
  );
  Preliminary_Lecture_Regisration.associate = (models) => {
    Preliminary_Lecture_Regisration.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Preliminary_Lecture_Regisration;
};