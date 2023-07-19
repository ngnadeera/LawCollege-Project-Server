module.exports = (sequelize, DataTypes) => {
    const Entrance_exam_admission = sequelize.define(
      "Entrance_exam_admission",
      {
        IndexNo: {
          type: DataTypes.STRING(10),
          primaryKey: true,
          allowNull: false,
        },
        GEApplicantID: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    Entrance_exam_admission.associate = (models) => {
      Entrance_exam_admission.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  
      Entrance_exam_admission.hasOne(models.Entrance_exam_results, {
        foreignKey: "IndexNo",
        as: "indexNo",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  
     
    };
    return Entrance_exam_admission;
  };
  