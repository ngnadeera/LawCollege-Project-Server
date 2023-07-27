module.exports = (sequelize, DataTypes) => {
  const Preliminary_Exam_Regisration = sequelize.define(
    "Preliminary_Exam_Regisration",
    {
      AppID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Month: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      Year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
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
    },
    {
      timestamps: false, // Set this to false if the view doesn't have timestamp columns
    }
  );
  Preliminary_Exam_Regisration.associate = (models) => {
    Preliminary_Exam_Regisration.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    
    Preliminary_Exam_Regisration.hasOne(models.Preliminary_Exam_Selected_Subjects, {
      foreignKey: "AppID",
      as: "appID",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Preliminary_Exam_Regisration;
};
