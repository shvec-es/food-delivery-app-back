const { Order } = require("../models");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Order.findByIdAndRemove(productId);
    if (!deletedProduct) {
      throw new Error(error.message);
    }
    return res.json({
      status: "success",
      code: 200,
      message: "Product deleted",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Product with id=${productId} not found`,
    });
  }
};

module.exports = deleteProduct;
