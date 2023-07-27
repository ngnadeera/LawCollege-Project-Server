module.exports = (sequelize, DataTypes) => {
  const Calling_Lecture_Registration = sequelize.define(
    "Calling_Lecture_Registration",
    {
      YearID: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      Year: {
        type: DataTypes.INTEGER,
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
  
  return Calling_Lecture_Registration;
};
