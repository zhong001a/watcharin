const express = require('express')
const offerRoute = express.Router();

const db = require('../../middlewere/usedb');
const { Offer, Problem, Detail } = db
db.sequelize.sync();

offerRoute.get('/all', async (req, res) => {
  const offers = await Offer.findAll()
  res.json({
    message: "success",
    status: 200,
    data: offers
  });
})

offerRoute.get('/oneoffer', async (req, res) => {
  let id = req.query.id;

  try {
    const result = await Offer.findOne({
      where: { id: id },
      include: [
        {
          model: Detail,

        },
        {
          model: Problem,
          attributes: ['name', ],
        }
      ],
    });

    if (!result) {
      return res.status(404).json({ error: 'Phone not found' });
    }

    res.json({
      message: "success",
      status: 200,
      data: result
    });

  } catch (error) {
    res.json({
      error: error.message
    })
  }

})

offerRoute.get('/problem', async (req, res) => {
  const problems = await Problem.findAll({});
  const parsedProblems = problems.map(problem => {
    return {
      id: problem.id,
      name: JSON.parse(problem.name),
    };
  });
  res.json(parsedProblems);
})

offerRoute.get('/detail', async (req, res) => {
  const details = await Detail.findAll({});
  const parsedProblems = details.map(detail => {
    return {
      id: detail.id,
      accessories: JSON.parse(detail.accessories),
    };
  });
  details.accessories = parsedProblems
  res.json(details);

})

offerRoute.post("/create", async (req, res) => {
  const dataBody = req.body;

  const createOffer = {
    name: dataBody.name,
    brand: dataBody.brand,
    capacity: dataBody.capacity,
    seller: dataBody.seller,
    sell_price: dataBody.sell_price,
    phone_no: dataBody.phone_no
  }
  const createDetail = {
    model: dataBody.model,
    warranty: dataBody.warranty,
    device: dataBody.device,
    screen: dataBody.screen,
    display: dataBody.display,
    accessories: dataBody.accessories,
  }

  //  res.json({
  //   message:"success",
  //   status:200,
  //   data:createOffer
  // })
  try {

    const createdDetail = await Detail.create(createDetail);
    const createdOffer = await Offer.create(createOffer);
    const createdProblem = await Problem.create({
      name: dataBody.problems,
    });

    await createdDetail.setOffer(createdOffer);
    await createdProblem.setOffer(createdOffer);

    res.json({
      message: "success",
      status: 201,
      data: createdOffer
    })



  } catch (error) {
    res.json({
      error: error.message
    })
  }
});

module.exports = offerRoute



