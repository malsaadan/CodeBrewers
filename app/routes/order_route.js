// Require necessary NPM packages...
const express = require('express');

// Require Mongoose Model for The Order
const Order = require('../models/order');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /api/orders
 * Description:   Get All Orders
 */

router.get('/api/orders', (req, res) => {
    Order.find()
    // Return all orders as an array of obj  
    .then((allOrders) => {
      res.status(200).json({ orders: allOrders });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  });


module.exports = router; 