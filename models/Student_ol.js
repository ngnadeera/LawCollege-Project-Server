module.exports = (sequelize, DataTypes) => {
    const Student_ol = sequelize.define("Student_ol", {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Subject: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      TypeOfEdInstitute: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      Year: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      Month: {
        type: DataTypes.STRING(15),
      },
      IndexNo: {
        type: DataTypes.STRING(15),
      },
      Result: {
        type: DataTypes.STRING(15),
      },
    },{
      timestamps: false
    });
  
    Student_ol.associate = (models) => {
      Student_ol.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    };
  
    return Student_ol;
  };
  