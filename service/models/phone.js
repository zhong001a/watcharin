module.exports = (sequelize, DataTypes) => {
    const phone = sequelize.define(
      'phone',
      {
  
        model: { type: DataTypes.STRING(50), allowNull: false },
        release_date:{ type: DataTypes.DATE, allowNull: true },

      },
      {
        tableName: 'phone'
      }
    );
  
    return phone;
  }