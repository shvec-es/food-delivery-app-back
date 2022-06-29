const express = require("express");

const { getShops, getProductById } = require("../../controllers");

const router = new express.Router();

router.get("/", getShops);
router.get("/:productId", getProductById);

module.exports = router;
