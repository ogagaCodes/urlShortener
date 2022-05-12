const Joi = require("joi");

exports.getUrlStatsSchema = Joi.object({
  shortcode: Joi.string().required()
});
