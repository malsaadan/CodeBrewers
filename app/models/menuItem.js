// Require necessary NPM packages
const mongoose = require("mongoose");

// Define menu item Schema
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  picture: { type: String },
  Category: { type: String, required: true }
});

// Compile our Model based on the Schema
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

// Export our Model for use
module.exports = MenuItem;
