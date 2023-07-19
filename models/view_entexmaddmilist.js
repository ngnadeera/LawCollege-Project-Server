module.exports = (sequelize, DataTypes) => {
    const View_entexmaddmilist = sequelize.define(
      'View_entexmaddmilist',
      {
        GEApplicantID: {
          type: DataTypes.STRING(10),
          primaryKey: true,
          allowNull: false,
        },
        NameInFull: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        NIC: {
          type: DataTypes.STRING(12),
          allowNull: false,
        },
        GKMedium: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        LanguageMedium: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        CenterID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: 'view_entexmaddmilist',
        timestamps: false,
       
      }
    );
  
    return View_entexmaddmilist;
  };
  