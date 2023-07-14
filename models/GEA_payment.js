module.exports = (sequelize, DataTypes) => {
    const GEA_payment = sequelize.define("GEA_payment", {
        GEApplicantID: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
          },
          ReferenceNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
          },
          BankName: {
            type: DataTypes.STRING(30),
            allowNull: true,
          },
          BranchName: {
            type: DataTypes.STRING(30),
            allowNull: true,
          },
          TypeOfPayment: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          DateOfPayment: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
        });
      
        GEA_payment.associate = (models) => {
            GEA_payment.belongsTo(models.GEA_personal_details, {
              foreignKey: 'GEApplicantID',
              as: 'personalDetails',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            });
          };

    return GEA_payment;
};