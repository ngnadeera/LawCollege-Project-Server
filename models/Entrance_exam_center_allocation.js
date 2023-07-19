module.exports = (sequelize, DataTypes) => {
    const Entrance_exam_center_allocation = sequelize.define(
      "Entrance_exam_center_allocation",
      {
        CenterID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        GEApplicantID: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
  
    Entrance_exam_center_allocation.associate = (models) => {
      Entrance_exam_center_allocation.belongsTo(models.GEA_personal_details, {
        foreignKey: "GEApplicantID",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  
      Entrance_exam_center_allocation.belongsTo(models.Entrance_exam_center, {
        foreignKey: "CenterID",
        as: "entrance_exam_center",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
      
    return Entrance_exam_center_allocation;
  };
  