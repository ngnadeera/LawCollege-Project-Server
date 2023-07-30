module.exports = (sequelize, DataTypes) => {
    const Intermidiate_exam_IndexNo = sequelize.define(
      "Intermidiate_exam_IndexNo",
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
    Intermidiate_exam_IndexNo.associate = (models) => {
      Intermidiate_exam_IndexNo.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  
      Intermidiate_exam_IndexNo.belongsTo(models.Preliminary_Exam_Regisration, {
        foreignKey: "AppID",
        as: "registration",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return Intermidiate_exam_IndexNo;
  };
  