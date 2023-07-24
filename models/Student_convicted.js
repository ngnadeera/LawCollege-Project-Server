module.exports = (sequelize, DataTypes) => {
  const Student_convicted = sequelize.define(
    "Student_convicted",
    {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      OffenceDescription: {
        type: DataTypes.TEXT,
      },
      FineDescription: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );

  Student_convicted.associate = (models) => {
    Student_convicted.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Student_convicted;
};
