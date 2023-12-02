module.exports = (sequelize, DataTypes) => {
    const offer = sequelize.define(
      'offer',
      {
  
        model: { type: DataTypes.STRING(50), allowNull: false },
        brand: { type: DataTypes.STRING(128), allowNull: false },
        capacity: { type: DataTypes.STRING(10), allowNull: false },
        sell_price: { type: DataTypes.INTEGER(), allowNull: false },
        seller: { type: DataTypes.STRING(256), allowNull: true },

        
      },
      {
        tableName: 'offer'
      }
    );
  
    return offer;
  }