module.exports = (sequelize, DataTypes) => {
    const Calling_Exam_Registration = sequelize.define(
      "Calling_Exam_Registration",
      {
        ID: {
          type: DataTypes.STRING(10),
          primaryKey: true,
          allowNull: false,
        },
        Year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        Month: {
            type: DataTypes.STRING(20),
            allowNull: false,
          },
        Status: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    
    return Calling_Exam_Registration;
  };
  