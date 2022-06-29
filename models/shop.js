const { Schema, model } = require("mongoose");

const shopsSchema = new Schema(
  {
    title: {
      type: String,
    },
    menu: [
      {
        product: String,
        img: String,
        price: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopsSchema);

module.exports = { Shop };
