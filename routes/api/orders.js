const express = require("express");

const { validation } = require("../../middlewares");
const { orderJoiSchema } = require("../../schemas");
const { addOrder, deleteProduct } = require("../../controllers");

const router = new express.Router();

router.post("/", validation(orderJoiSchema), addOrder);
router.delete("/:productId", deleteProduct);

module.exports = router;
