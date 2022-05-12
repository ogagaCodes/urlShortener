const Joi = require("joi").extend(require("@joi/date"));

exports.shortenSchema = Joi.object({
  shortcode: Joi.string().optional(),
  url: Joi.string().required(),
  redirectCount: Joi.string().optional(),
  lastSeenDate: Joi.date().utc().optional(),
})