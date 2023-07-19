module.exports = (sequelize, DataTypes) => {
    const Entrance_exam_date_time = sequelize.define(
      "Entrance_exam_date_time",
      {
        DateTimeID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        Date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        GKTime: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        LangTime: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        timestamps: false, 
      }
    );
  
    return Entrance_exam_date_time;
  };
  