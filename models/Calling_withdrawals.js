module.exports = (sequelize, DataTypes) => {
    const Calling_withdrawals = sequelize.define(
      "Calling_withdrawals",
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        Status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        timestamps: false, // Set this to false if the view doesn't have timestamp columns
      }
    );
    
    return Calling_withdrawals;
  };
  