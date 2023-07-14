module.exports = (sequelize, DataTypes) => {
  const GEA_personal_details = sequelize.define("GEA_personal_details", {
    GEApplicantID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    NIC: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
    },
    NameInFull: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    CivilStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    SrilankaCitizenship: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  GEA_personal_details.associate = (models) => {

    GEA_personal_details.hasOne(models.GEA_contact, {
    foreignKey: 'GEApplicantID',
    as: 'contact',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_language_selection, {
        foreignKey: 'GEApplicantID',
        as: 'languageSelection',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_address, {
        foreignKey: 'GEApplicantID',
        as: 'address',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_al, {
        foreignKey: 'GEApplicantID',
        as: 'al',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_al_results, {
        foreignKey: 'GEApplicantID',
        as: 'alresults',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_other_qulification, {
        foreignKey: 'GEApplicantID',
        as: 'otherqualifications',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_ol_english, {
        foreignKey: 'GEApplicantID',
        as: 'olenglish',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_ol_sinhala, {
        foreignKey: 'GEApplicantID',
        as: 'olsinhala',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_ol_tamil, {
        foreignKey: 'GEApplicantID',
        as: 'oltamil',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_convicted_offence, {
        foreignKey: 'GEApplicantID',
        as: 'convictedoffence',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_convicted_fine, {
        foreignKey: 'GEApplicantID',
        as: 'convictedfine',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_previous_sits, {
        foreignKey: 'GEApplicantID',
        as: 'previoussits',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });

    GEA_personal_details.hasOne(models.GEA_payment, {
        foreignKey: 'GEApplicantID',
        as: 'payment',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
    
    GEA_personal_details.hasOne(models.Student_login, {
      foreignKey: "StudentID",
      as: "studentLogin",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    GEA_personal_details.hasOne(models.Applicant_edit_request, {
      foreignKey: "GEApplicantID",
      as: "ediRequest",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    GEA_personal_details.belongsTo(models.Applicant_signup, {
      foreignKey: "Username",
      targetKey: "Username",
      as: "personalDetails",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    

};

  

  return GEA_personal_details;
};
