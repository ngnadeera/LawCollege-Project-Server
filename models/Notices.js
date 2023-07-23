module.exports = (sequelize, DataTypes) => {
    const Notices = sequelize.define("Notices", {
        NoticeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        SpecialDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Heading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        SubHeading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Downloads: {
            type: DataTypes.STRING,
            allowNull: true
        },
        VerificationStatus: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        Department: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Notices;
};
