const shops = require("../shops.json");

const getProductById = (req, res) => {
  const { productId } = req.params;
  try {
    const product = shops.map(({ menu }) =>
      menu.find((item) => item._id === productId)
    );
    return res.json({
      status: "success",
      code: 200,
      data: product,
    });
    // shopMenu.find((item) => {
    //   console.log(item._id);
    //   if (item._id === productId) {
    //     return res.json({
    //       status: "success",
    //       code: 200,
    //       data: item,
    //     });
    //   } else {
    //     throw new Error(error.message);
    //   }
    // });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Product with id=${productId} not found`,
    });
  }
};

module.exports = getProductById;
