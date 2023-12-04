module.exports = (sequelize, DataTypes) => {
    const brand = sequelize.define(
      'brand',
      {

        name: { type: DataTypes.STRING(50), allowNull: false },
        image:{ type: DataTypes.STRING(255), allowNull: false } 
      },
      {
        tableName: 'brand'
      }
    );
  
    return brand;
  }