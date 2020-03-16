// Require necessary NPM packages...
const express = require('express');

// Require Mongoose Model for The Order
const MenuItem = require('../models/menuItem');
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
* URI:          /api/orders
* Description:  Create a new order
*/

// Orders should be dynamic .. :')
router.post('/api/orders', (req, res) => {

  Order.create(req.body.order)
  
  // Return all orders as an array of obj  
  .then((newOrder) => {
    // Creating a new data using the model Men
    var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
    res.status(201).json({newOrder}); 
  })
  // MenuItem.create(req.body)
  // return Order.findOneAndUpdate({ })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});

/**
* Action:       SHOW
* Method:       GET
* URI:          /api/orders
* Description:  
*/

router.get('/api/orders/:id', (req, res) => {
  Order.findById(req.params.id)
  
    .then((order) => {
      if (order) {
        res.status(200).json({
          order: order
        });
      } else {
        // If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: 'Document Not Found Error',
            message: 'The provided ID doesn\'t match any documents'
          }
        });
      }
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({
        error: error
      });
    })
});

module.exports = router; 
