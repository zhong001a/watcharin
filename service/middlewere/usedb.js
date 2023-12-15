const { Sequelize } = require('sequelize');

// use in docker

// const sequelize = new Sequelize('remo_db', 'root', 'root', {
//   host: 'db',
//   dialect: 'mysql',
//   dialectOptions: {
//     charset: 'utf8mb4', 
//     collate: 'utf8mb4_general_ci' 
//   }
// })

// use localhot

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4', 
    collate: 'utf8mb4_general_ci' 
  },
});

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

db.Offer = require("../models/offer")(sequelize, Sequelize);
db.Problem = require("../models/problem")(sequelize, Sequelize);
db.Detail = require("../models/detail")(sequelize, Sequelize);

db.Detail.hasOne(db.Offer);
db.Offer.belongsTo(db.Detail)

db.Problem.hasOne(db.Offer);
db.Offer.belongsTo(db.Problem)

module.exports = db;