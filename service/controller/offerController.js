
const db = require("../middlewere/usedb");
const { Offer, Problem, Detail } = db;
db.sequelize.sync();

const findAll = async (req, res) => {
  const offers = await Offer.findAll();
  return res.json({
    message: "success",
    status: 200,
    data: offers,
  });
};

const findOne = async (req, res) => {
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
          attributes: ["id", "name"],
        },
      ],
    });

    if (!result) {
      return res.status(404).json({ error: "Offer not found" });
    }
    return res.json({
      message: "success",
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const findDetail = async (req, res) => {
  const details = await Detail.findAll({});
  const parsedProblems = details.map((detail) => {
    return {
      id: detail.id,
      accessories: JSON.parse(detail.accessories),
    };
  });
  details.accessories = parsedProblems;
  return res.json({
    message: "success",
    status: 201,
    data: details,
  });
};

const CreateOffer = async (req, res) => {
  const dataBody = req.body;

    return res.json({
      message: "success",
      status: 201,
      data: dataBody,
    });
  // const createOffer = {
  //   name: dataBody.name,
  //   brand: dataBody.brand,
  //   capacity: dataBody.capacity,
  //   seller: dataBody.seller,
  //   sell_price: dataBody.sell_price,
  //   phone_no: dataBody.phone_no,
  // };
  // const createDetail = {
  //   model: dataBody.model,
  //   warranty: dataBody.warranty,
  //   device: dataBody.device,
  //   screen: dataBody.screen,
  //   display: dataBody.display,
  //   accessories: dataBody.accessories,
  // };
  // try {
    // const createdDetail = await Detail.create(createDetail);
    // const createdOffer = await Offer.create(createOffer);
    // const createdProblem = await Problem.create({
    //   name: dataBody.problems,
    // });

    // await createdDetail.setOffer(createdOffer);
    // await createdProblem.setOffer(createdOffer);

    // // return res.json({
    //   message: "success",
    //   status: 201,
    //   data: createdOffer,
    // });
//   } catch (error) {
//     res.json({
//       error: error.message,
//     });
//   }
};

const deleteOffer = async (req, res) => {
  const offerId = req.params.id;
  const removed = await Offer.destroy({
    where: {
      id: offerId,
    },
  });
  return res.json({
    message: "success",
    status: 201,
    data: removed,
  });
};

module.exports = {
  findAll,
  findOne,
  findDetail,
  CreateOffer,
  deleteOffer
};
