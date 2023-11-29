module.exports = (sequelize, DataTypes) => {
    const capacity = sequelize.define(
      'capacity',
      {
  
        size: { type: DataTypes.STRING(50), allowNull: false },

        release_price:{ type: DataTypes.INTEGER(), allowNull: true },
        current_price:{ type: DataTypes.INTEGER(), allowNull: true },

      },
      {
        tableName: 'capacity'
      }
    );
  
    return capacity;
  }