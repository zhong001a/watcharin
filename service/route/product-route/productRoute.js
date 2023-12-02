const express = require('express')
const productRoute = express.Router();

const db = require('../../middlewere/usedb');
const { Phone, Capacity, Brand } = db

db.sequelize.sync();

productRoute.get('/alltest', async (req, res) => {
  const phone = await Phone.findAll({})
  res.json(phone)
})

productRoute.get('/allproduct', async (req, res) => {

  try {
    const phonesData = await Phone.findAll({
      include: [
        {
          model: Brand,

        },
        {
          model: Capacity,
          attributes: ['id','size','release_price','second_price'],
        },
      ],
    });

    const data = (phonesData.map((item)=>{
      const phones = {
        id:item.id,
        model: item.model,
        image: item.image,
        brand: item.brand.name,
        release_date:item.release_date,
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

productRoute.get('/brand', async (req, res) => {
  const brand = await Brand.findAll({});
  res.json({
    status: 200,
    message:"success",
    data: brand
    })
})

productRoute.post('/brand/create', async (req, res) => {
  const data = req.body;
  
  const [brand, created] = await Brand.findOrCreate({
    where: { name: data.name,
      image: data.image
     },
    defaults: { name: data.name }
  });

  // const [createBrand,created] = await Brand.findOrCreate({
  //   name: data.name,
  //   image: data.image
  // });

  res.json({
    status: 200,
    message:"success",
    data: created
    })
})

productRoute.get('/phone', async (req, res) => {
   let phoneId = req.query.id;

    if(!phoneId){
      phoneId = await Phone.findOne({
        attributes: ['id']
      });
    }
    try {
      const result = await Phone.findOne({ 
        where: { id:phoneId},
        include: [
          {
            model: Brand,
            attributes: ['name'],
           
          },
          {
            model: Capacity,
            attributes: ['size'],

          }
        ],
      });

      if (!result) {
        return res.status(404).json({ error: 'Phone not found' });
      }
      const data = {
        model: result.model,
        brand: result.brand ? result.brand.name : null,
    
      }

      res.json({
        message:"success",
        status: 200,
        data:result
      });

    } catch (error) {
      res.json({
        error:error.message
      })
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
    const capacities = phoneData.capacities;

    let createCapacities=[];
    capacities.map(async (capacity) => {
      createCapacities.push(capacity.size);
      const data = capacity
      data.phoneId = phone.id
      const newCapacity = await Capacity.upsert(data)
      createCapacities.push(newCapacity);
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


module.exports = productRoute;

