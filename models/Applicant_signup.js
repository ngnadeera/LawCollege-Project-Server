module.exports = (sequelize, DataTypes) => {
    const Applicant_signup = sequelize.define("Applicant_signup", {
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
    },
    });
  
    Applicant_signup.associate = (models) => {
    Applicant_signup.hasOne(models.GEA_personal_details, {
        foreignKey: "Username",
        as: "studentdetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Applicant_signup.hasOne(models.Applicant_edit_request, {
        foreignKey: "Username",
        as: "editRequest",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  
    return Applicant_signup;
  };