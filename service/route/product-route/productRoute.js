const express = require('express')
const productRoute = express.Router();

const db = require('../../middlewere/usedb');
const { Phone, Capacity, Brand } = db

db.sequelize.sync();

productRoute.get('/product', async (req, res) => {
  try {

    const products = await Phone.findAll()
    return res.json(products)
  } catch (error) {
    res.json({
      msg: error
    })
  }
});

productRoute.get('/phone/:id', async (req, res) => {
  const phoneId = req.params.id
    try {
      const result = await Phone.findOne({
        where: { id: phoneId },
        include: {
          model: Brand, 
        },
      });

      if (!result) {
        return res.status(404).json({ error: 'Phone not found' });
      }

      res.json({
        phone: result,
        brandName: result.brand ? result.brand.name : null,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
)

productRoute.get('/brand/:name', async (req, res) => {
  const brandName = req.params.name
    try {
      const phonesInBrand = await Phone.findAll({
        attributes: ['model'],
        include: [
          {
            model: Brand,
            attributes: ['name'],
            where: { name: brandName },
          },
          {
            model: Capacity,
            attributes: ['size'],
          },
        ],
      });

      res.json({
        phones: phonesInBrand,
      });
    } catch (error) {
      res.json({
        error: error.message
      })
      
    }
  }
)

// productRoute.get('/:id/capacity', async (req, res) => {
//   try {
//     const phoneId = req.params.id

//     const result = await Phone.findOne({
//       where: { id: phoneId },
//       include: {
//         model: Capacity,
//         where: { size: "256" }
//       },
//       raw: true
//     })
//     const data = {
//       name: result.name,
//       capacity: result['capacities.size'],
//       price: result['capacities.current_price'],
//     }
//     res.json({
//       data
//     })
//   } catch (err) {
//     console.error(err)
//     res.json(err)
//   }
// })


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

