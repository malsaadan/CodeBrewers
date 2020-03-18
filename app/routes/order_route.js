// Require necessary NPM packages...
const express = require('express');
// Require Mongoose Model for The Order
const MenuItem = require('../models/menuItem');
const Order = require('../models/order');
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
/*
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


  /*
 * Action:       DESTROY
 * Method:       DELETE
 * URI:          /api/orders/id
 * Description:  Delete an Orders by ID
 */

router.delete("/api/orders/:id", (req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      if (order) {
        // Pass the result of Mongoose's `.delete` method to the next `.then`
        return order.remove();
      } else {
        // If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID Doesn't match any documents"
          }
        });
      }
    })
    .then(() => {
      // If the deletion succeeded, return 204 and no JSON
      res.status(204).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
  });

/*
* Action:       CREATE
* Method:       POST
* URI:          /api/orders
* Description:  Create a new order
*/

// Orders should be dynamic .. :')
router.post('/api/orders', /*async*/ (req, res) => {

    Order.create(req.body.order)
  
  // Return all orders as an array of obj  
    .then((newOrder) => {
    res.status(201).json({newOrder}); 
  })
  
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
});



module.exports = router; 
