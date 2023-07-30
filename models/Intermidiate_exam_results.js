module.exports = (sequelize, DataTypes) => {
    const Intermidiate_exam_results = sequelize.define(
      "Intermidiate_exam_results",
      {
        IndexNo: {
          type: DataTypes.STRING(10),
          primaryKey: true,
        },
        RegNo: {
          type: DataTypes.STRING(10),
        },
        LW101: {
          type: DataTypes.INTEGER,
        },
        LW102: {
          type: DataTypes.INTEGER,
        },
        LW103: {
          type: DataTypes.INTEGER,
        },
        LW106: {
          type: DataTypes.INTEGER,
        },
        LW107: {
          type: DataTypes.INTEGER,
        },
        LW108: {
          type: DataTypes.INTEGER,
        },
        LW109: {
          type: DataTypes.INTEGER,
        },
        LW203: {
          type: DataTypes.INTEGER,
        },
        LW210: {
          type: DataTypes.INTEGER,
        },
        Total: {
          type: DataTypes.INTEGER,
        },
        Average: {
          type: DataTypes.DECIMAL(4, 2),
        },
        Grade: {
          type: DataTypes.STRING(10),
        },
      },
      {
        timestamps: false,
      }
    );
  
    return Intermidiate_exam_results;
  };
  