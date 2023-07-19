module.exports = (sequelize, DataTypes, models) => {
    const Entrance_exam_center = sequelize.define(
      "Entrance_exam_center",
      {
        CenterID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        Name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Capacity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
  
    Entrance_exam_center.associate = (models) => {
      Entrance_exam_center.hasMany(models.Entrance_exam_center_allocation, {
        foreignKey: "CenterID",
        as: "allocations",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
    return Entrance_exam_center;
  };
  