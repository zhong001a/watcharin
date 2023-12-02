module.exports = (sequelize, DataTypes) => {
    const problem = sequelize.define(
      'problem',
      {
        name: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: [], 
          },
      },
      {
        tableName: 'problem'
      }
    );
  
    return problem;
  }