const Joi = require("joi");

const orderJoiSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  adress: Joi.string().min(3).required(),
  products: Joi.array().items({
    product: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
});

module.exports = { orderJoiSchema };
