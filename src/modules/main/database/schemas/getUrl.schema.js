const Joi = require("joi")

exports.getUrlSchema = Joi.object({
  shortcode: Joi.string().required()
});
