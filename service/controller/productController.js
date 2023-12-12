const db = require("../middlewere/usedb");
const { Phone, Capacity, Brand } = db;

db.sequelize.sync();

const findAll = async (req, res) => {
  try {
    const phonesData = await Phone.findAll({
      include: [
        {
          model: Brand,
          attributes: ["name"],
        },
        {
          model: Capacity,
          attributes: ["id", "size", "release_price", "second_price"],
        },
      ],
    });

    const data = phonesData.map((item) => {
      const phones = {
        id: item.id,
        name: item.name,
        image: item.image,
        brand: item.brand.name,
        release_date: item.release_date,
        capacities: item.capacities,
      };
      return phones;
    });

    return res.json({
      message: "success",
      status: 200,
      data,
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};

const findOne = async (req, res) => {
  let phoneId = req.query.id;
  if (!phoneId) {
    phoneId = await Phone.findOne({
      attributes: ["id"],
    });
  }
  try {
    const result = await Phone.findOne({
      where: { id: phoneId },
      include: [
        {
          model: Brand,
          attributes: ["name"],
        },
        {
          model: Capacity,
          attributes: ["size", "release_price", "second_price"],
        },
      ],
    });

    if (!result) {
      return res.status(404).json({ error: "Phone not found" });
    }
    const data = {
      id: result.id,
      name: result.name,
      image: result.image,
      release_date: result.release_date,
      brand: result.brand.name,
      capacities: result.capacities,
    };

    return res.json({
      message: "success",
      status: 200,
      data: data,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const createOne = async (req, res) => {
  const phoneData = req.body;

  try {
    const phone = await Phone.create(phoneData);

    const [brand, created] = await Brand.findOrCreate({
      where: { name: phoneData.brand },
      defaults: { name: phoneData.brand },
    });

    await phone.setBrand(brand.id);
    const capacities = phoneData.capacities;

    let createCapacities = [];
    capacities.map(async (capacity) => {
      createCapacities.push(capacity.size);
      const data = capacity;
      data.phoneId = phone.id;
      const newCapacity = await Capacity.upsert(data);
      createCapacities.push(newCapacity);
    });

    return res.json({
      phone,
      createCapacities,
      newBrand: created,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const findBrand = async (req, res) => {
  const brand = await Brand.findAll({});
  return res.json({
    status: 200,
    message: "success",
    data: brand,
  });
};

const createBrand = async (req, res) => {
  
  const data = req.body;

  const createBrand = await Brand.findOrCreate({
    where: { name: data.name },
    defaults: { image: data.image },
  });

  return res.json({
    status: 200,
    message: "success",
    data: createBrand,
  });
};

const findImage = async (req, res) => {
  let phoneName = req.query.name;

  try {
    const result = await Phone.findOne({
      where: { name: phoneName },
      attributes: ["image"],
    });

    if (!result) {
      return res.status(404).json({ error: "Phone not found" });
    }
    const data = {
      id: result.id,
      name: result.image,
    };

    return res.json({
      message: "success",
      status: 200,
      data: data,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const deleteOne = async (req, res) => {
  const phoneId = req.params.id;
  const removed = await Phone.destroy({
    where: {
      id: phoneId,
    },
  });
  return res.json(removed);
};

module.exports = {
  findAll,
  findOne,
  createOne,
  findBrand,
  createBrand,
  findImage,
  deleteOne
};
