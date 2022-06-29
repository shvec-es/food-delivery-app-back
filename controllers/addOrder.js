const { Order } = require("../models");

const addOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    return res
      .status(201)
      .json({ status: "success", code: 201, data: newOrder });
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ status: "error", code: 400, message: "Not found" });
  }
};

module.exports = addOrder;
