const shops = require("../shops.json");

const getShopById = (req, res) => {
  const { shopId } = req.params;
  try {
    const shop = shops.find((shop) => shop._id === shopId);
    return res.json({
      status: "success",
      code: 200,
      data: shop,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Product with id=${shopId} not found`,
    });
  }
};

module.exports = getShopById;
