module.exports = (sequelize, DataTypes) => {
  const Student_personal_details = sequelize.define(
    "Student_personal_details",
    {
      RegNo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING(10),
        
      },
      NIC: {
        type: DataTypes.STRING(12),
        
      },
      NameInFull: {
        type: DataTypes.STRING,
        
      },
      Gender: {
        type: DataTypes.BOOLEAN,
        
      },
      DOB: {
        type: DataTypes.DATEONLY,    
      },
      ContactNumberMobile: {
        type: DataTypes.STRING(12),
        
      },
      ContactNumberResident: {
        type: DataTypes.STRING(12),
       
      },
      Email: {
        type: DataTypes.STRING(35),
        
      },
      PermanentAddress: {
        type: DataTypes.STRING,
        
      },
      Province: {
        type: DataTypes.STRING(35),
        
      },
      CivilStatus: {
        type: DataTypes.BOOLEAN,
        
      },
      SrilankaCitizenship: {
        type: DataTypes.BOOLEAN,
        
      },
      StartedDate: {
        type: DataTypes.DATEONLY,
      },
      Type: {
        type: DataTypes.BOOLEAN,
      }
    }
  );

  Student_personal_details.associate = (models) => {
    Student_personal_details.hasOne(models.Student_al, {
      foreignKey: "RegNo",
      as: "al",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Student_personal_details.hasOne(models.Student_al_results, {
      foreignKey: "RegNo",
      as: "alresults",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Student_personal_details.hasOne(models.Student_other_qulification, {
      foreignKey: "RegNo",
      as: "otherqualifications",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Student_personal_details.hasOne(models.Student_ol, {
      foreignKey: "RegNo",
      as: "ol",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    Student_personal_details.hasOne(models.Student_convicted, {
      foreignKey: "RegNo",
      as: "convicted",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Student_personal_details;
};
