// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for order
const Order= require('../models/order');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
/**
 * Action:       DESTROY
 * Method:       DELETE
 * URI:         /api/orders/:id
 * Description:  Delete An Order by order ID
 */
router.delete('/api/orders/:id', (req, res) => {
    Article.findById(req.params.id)
    .then((order) => {
      if (order) {
        // Pass the result of Mongoose's `.delete` method to the next `.then`
        return order.remove();
      } else {
        // If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: 'DocumentNotFoundError',
            message: 'The provided ID Doesn\'t match any documents'
          }
        });
      }
    })
    .then(() => {
      // If the deletion succeeded, return 204 and no JSON
      res.status(204).end();
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
   });
  
  // Export the Router so we can use it in the server.js file
  module.exports = router;
