const Joi = require("joi");

const shopJoiSchema = Joi.object({
  title: Joi.string().min(3).max(20).required(),
  menu: Joi.array().items({
    product: Joi.string().required(),
    img: Joi.string().required(),
    price: Joi.number().required(),
  }),
});

module.exports = { shopJoiSchema };
