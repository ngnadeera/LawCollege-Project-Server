module.exports = (sequelize, DataTypes) => {
    const Exam_Medicals = sequelize.define(
      "Exam_Medicals",
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
        VerifyStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
          },
        
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    Exam_Medicals.associate = (models) => {
      
      Exam_Medicals.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
    return Exam_Medicals;
  };
  