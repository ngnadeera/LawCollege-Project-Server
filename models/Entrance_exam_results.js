module.exports = (sequelize, DataTypes) => {
    const Entrance_exam_results = sequelize.define(
      "Entrance_exam_results",
      {
        IndexNo: {
          type: DataTypes.STRING(10),
          primaryKey: true,
          allowNull: false,
        },
        GKMarks: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        LangMarks: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    Entrance_exam_results.associate = (models) => {
      Entrance_exam_results.belongsTo(models.Entrance_exam_admission, {
        foreignKey: "IndexNo",
        as: "indexNo",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
    return Entrance_exam_results;
  };
  