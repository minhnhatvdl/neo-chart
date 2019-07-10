const mongoose = require("mongoose");

const OrbitingBodySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true }
});

const OrbitingBody = mongoose.model("OrbitingBody", OrbitingBodySchema);

module.exports = {
  OrbitingBody,
  OrbitingBodySchema
};
