const { Schema, model } = require("mongoose");

const ordersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name"],
    },
    email: {
      type: String,
      required: [true, "Enter your email"],
    },
    phone: {
      type: String,
      required: [true, "Enter your phone number"],
    },
    adress: {
      type: String,
      required: [true, "Enter your adress"],
    },
    products: [
      {
        product: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", ordersSchema);

module.exports = { Order };
