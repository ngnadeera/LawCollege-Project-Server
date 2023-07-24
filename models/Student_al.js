module.exports = (sequelize, DataTypes) => {
  const Student_al = sequelize.define(
    "Student_al",
    {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Scheme: {
        type: DataTypes.BOOLEAN,
      },
      IndexNo: {
        type: DataTypes.STRING(20),
      },
      Year: {
        type: DataTypes.STRING(4),
      },
      IndexNo: {
        type: DataTypes.STRING(20),
      },
      Month: {
        type: DataTypes.STRING(20),
      },
      Medium: {
        type: DataTypes.STRING(20),
      },
      TypeOfEdInstitute: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
    }
  );

  Student_al.associate = (models) => {
    Student_al.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Student_al;
};
