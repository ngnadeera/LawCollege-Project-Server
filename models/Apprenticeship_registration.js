module.exports = (sequelize, DataTypes) => {
    const Apprenticeship_registration = sequelize.define(
      "Apprenticeship_registration",
      {
        RegNo: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
          },
        ReferenceNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        BankName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        BranchName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        TypeOfPayment: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        DateOfPayment: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        PaymentVerification: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },ApprenticeshipApproval: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        LegalClinic:  {
            type: DataTypes.STRING(20),
            allowNull: false
        }, WorkshopMedium: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    Apprenticeship_registration.associate = (models) => {
      Apprenticeship_registration.belongsTo(models.Student_personal_details, {
        foreignKey: "RegNo",
        as: "personalDetails",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      
    };
    return Apprenticeship_registration;
  };
  