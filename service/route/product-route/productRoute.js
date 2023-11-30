const express = require('express')
const productRoute = express.Router();

const db = require('../../middlewere/usedb');
const { Phone, Capacity, Brand } = db

db.sequelize.sync();

productRoute.get('/allproduct', async (req, res) => {
  let brandName = req.query.brand;

  try {

    const phonesData = await Phone.findAll({
      attributes: ['id','model'],
      include: [
        {
          model: Brand,
          attributes: ['name'],
        },
        {
          model: Capacity,
          attributes: ['id','size','release_price','current_price'],
        },
      ],
    });

    const data = (phonesData.map((item)=>{
      const phones = {
        id:item.id,
        model: item.model,
        brand: item.brand.name,
        capacities: item.capacities
      }
      return phones
    }))

    return res.json({
      message: "success",
      status: 200,
      data
    })

  } catch (error) {
    res.json({
      msg: error.message
    })
  }
});

productRoute.get('/phone/:id', async (req, res) => {
  const phoneId = req.params.id
    try {
      const result = await Phone.findOne({
        where: { id: phoneId },
        include: [
          {
            model: Brand,
            attributes: ['name'],

          },
          {
            model: Capacity,
            attributes: ['size'],
            where:{ id : 1}
          },
        ],

        
      });

      if (!result) {
        return res.status(404).json({ error: 'Phone not found' });
      }
      const data = {
        model: result.model,
        brand: result.brand ? result.brand.name : null,
        size: result.capacities[0].size
      }

      res.json({

        data

      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
)


productRoute.post("/create", async (req, res) => {
  const phoneData = req.body;
  try {
    const phone = await Phone.create(phoneData)

    const [brand, created] = await Brand.findOrCreate({
      where: { name: phoneData.brand },
      defaults: { name: phoneData.brand }
    });

    await phone.setBrand(brand.id);

    const capacities = phoneData.capacity;
    let createCapacities = []

    capacities.map(async (capacity) => {
      const data = capacity
      data.phoneId = phone.id
      const newCapacity = await Capacity.upsert(data)
      createCapacities.push(newCapacity)
    })


    res.json({
      phone,
      createCapacities,
      newBrand: created

    })

  } catch (error) {
    res.json({
      error: error.message
    })
  }

});

productRoute.post("/brand", async (req, res) => {
  const brandData = req.body;
  try {
    // Find or create a user with the given username
    const [brand, created] = await Brand.findOrCreate({
      where: { name: brandData.name },
      defaults: brandData // Defaults will be used if the user doesn't exist
    });

    res.json({
      brand,
      created
    });

  } catch (error) {
    res.json({
      errr: error
    })
  }

});



module.exports = productRoute;

