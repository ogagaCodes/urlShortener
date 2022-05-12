const mongoose = require ('mongoose');

const schema = mongoose.Schema(
  {
    shortcode: String,
    url: String,
    redirectCount: Number,
    lastSeenDate: {type: Date},
  },
  {
    timestamps: {startDate: 'startDate'},
  }
);

module.exports = mongoose.model ('UrlModel', schema);
