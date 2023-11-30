const { Sequelize } = require('sequelize');

// use in docker
// const sequelize = new Sequelize('remo_db', 'root', 'root', {
//   host: 'db',
//   dialect: 'mysql'
// })

// use localhot
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Phone = require("../models/phone")(sequelize, Sequelize);
db.Capacity = require("../models/capacity")(sequelize, Sequelize);
db.Brand = require("../models/brand")(sequelize, Sequelize);

db.Phone.hasMany(db.Capacity);
db.Capacity.belongsTo(db.Phone);

db.Brand.hasMany(db.Phone)
db.Phone.belongsTo(db.Brand);


module.exports = db;