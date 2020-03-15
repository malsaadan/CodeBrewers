// Require necessary NPM packages
const mongoose = require('mongoose');

// Define Order Schema ...
const orderSchema = new mongoose.Schema ({ 
    itemsList : [{menuItemID: String , quantity : Number }],
    totalPrice : { type : Number , sequired : true },
    discount :Number,
    tax : { type : Number , sequired : true },
    userId : { type : Number , sequired : true },
}, {
  timestamps: true,
});

// Compile our Model based on the Schema
const Order = mongoose.model('Order',orderSchema);

// Export the Model 
module.exports = Order;