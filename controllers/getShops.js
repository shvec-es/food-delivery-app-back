const shops = require("../shops.json");

const getShops = async (req, res) => {
  try {
    res.json({
      status: "success",
      code: 200,
      data: shops,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getShops;
