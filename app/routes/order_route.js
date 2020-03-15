// Require necessary NPM packages...
const express = require('express');

// Require Mongoose Model for The Order
const Menu = require('../models/menuItem');
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

/**
* Action:       CREATE
* Method:       POST
* URI:          /api/articles
* Description:  Create a new Article
*/
router.post('/api/orders', (req, res) => {
  Order.create(req.body.order)
  // On a successful `create` action, respond with 201
  // HTTP status and the content of the new article.

  

  .then((newOrder) => {
    res.status(201).json({ order: newOrder });
  })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});



module.exports = router; 
