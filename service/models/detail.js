module.exports = (sequelize, DataTypes) => {
  const detail = sequelize.define(
    'detail',
    {
      model: { type: DataTypes.STRING(128), allowNull: false },
      warranty: { type: DataTypes.STRING(128), allowNull: false },
      divice: { type: DataTypes.STRING(128), allowNull: true },
      screen: { type: DataTypes.STRING(128), allowNull: true },
      display: { type: DataTypes.STRING(128), allowNull: true },

      accessories: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
    },
    {
      tableName: 'detail',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );

  return detail;
}