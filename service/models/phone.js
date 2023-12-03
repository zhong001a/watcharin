module.exports = (sequelize, DataTypes) => {
    const phone = sequelize.define(
      'phone',
      {
  

        name: { type: DataTypes.STRING(50), allowNull: false },
        image: { type: DataTypes.STRING(256), allowNull: false },
        release_date:{ type: DataTypes.DATE, allowNull: true },

      },
      {
        tableName: 'phone'
      }
    );
  
    return phone;
  }