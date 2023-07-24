module.exports = (sequelize, DataTypes) => {
  const Student_al_results = sequelize.define("Student_al_results", {
    RegNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    SubjectNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    Subject: {
      type: DataTypes.STRING(25),
    },
    Grading: {
      type: DataTypes.STRING(2),
    },
  },
  {
    timestamps: false
  });

  Student_al_results.associate = (models) => {
    Student_al_results.belongsTo(models.Student_personal_details, {
      foreignKey: "RegNo",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Student_al_results;
};
