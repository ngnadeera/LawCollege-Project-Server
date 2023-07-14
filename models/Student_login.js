module.exports = (sequelize, DataTypes) => {
    const Student_login = sequelize.define("Student_login", {
      username: {
        type: DataTypes.STRING(12),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "GEA_personal_details",
          key: "NIC",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StudentID: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
          model: "GEA_personal_details",
          key: "GEApplicantID",
        },
      },
    });
  
    Student_login.associate = (models) => {
      Student_login.belongsTo(models.GEA_personal_details, {
        foreignKey: "Username",
        targetKey: "Username",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return Student_login;
  };