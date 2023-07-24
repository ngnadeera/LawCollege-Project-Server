module.exports = (sequelize, DataTypes) => {
    const Student_login = sequelize.define("Student_login", {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    });
  
    Student_login.associate = (models) => {
      Student_login.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        targetKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return Student_login;
  };