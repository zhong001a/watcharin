const express = require('express')
const offerRoute = express.Router();

const offerController  = require('../../controller/offerController');

offerRoute.get('/all', offerController.findAll)

offerRoute.get('/oneoffer', offerController.findOne)

offerRoute.get('/detail', offerController.findDetail)

offerRoute.post("/create", offerController.CreateOffer);

offerRoute.delete("/delete/:id", offerController.deleteOffer);

module.exports = offerRoute

