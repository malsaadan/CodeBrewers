// Require necessary NPM packages
const express = require("express");

// Require Mongoose Model for MenuItem
const MenuItem = require("../models/menuItem");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();



/*
 * Action:      INDEX
 * Method:      GET
 * URI:         /api/menu-items
 * Description: Get All MenuItems
 */

router.get("/api/menu-items", (req, res) => {
    MenuItem.find() // find() talks to the DB
      // Return all MenuItems as an Array
      .then(AllMenuItems => {
        res.status(200).json({ menuItems: AllMenuItems });
      })
      // Catch any error that might occur
      .catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });



/*
 * Action:       SHOW
 * Method:       GET
 * URI:          /api/menu-items/id
 * Description:  Get a menu item by item ID
 */

router.get("/api/menu-items/:id", (req, res) => {
    MenuItem.findById(req.params.id)
      .then(menuItem => {
        if (menuItem) {
          res.status(200).json({ menuItem: menuItem });
        } else {
          // If we couldn't find a document with the matching ID
          res.status(404).json({
            error: {
              name: "DocumentNotFoundError",
              message: "The provided ID doesn't match any documents"
            }
          });
        }
      })
      // Catch any errors that might occur
      .catch(error => {
        res.status(500).json({ error: error });
      });
  });



  /*
 * Action:       CREATE
 * Method:       POST
 * URI:          /api/menu-items
 * Description:  Create a new menu item
 */

router.post("/api/menu-items", (req, res) => {
    MenuItem.create(req.body.menuItem)
      // On a successful `create` action, respond with 201
      // HTTP status and the content of the new menu item
      .then(newMenuItem => {
        res.status(201).json({
          menuItem: newMenuItem
        });
      })
      // Catch any errors that might occur
      .catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });




  // PUT updates whole document, PATCH doing some process then update
/*
 * Action:       UPDATE
 * Method:       PATCH
 * URI:          /api/menu-items/id
 * Description:  Update a menu item by item ID
 */

router.patch("/api/menu-items/:id", (req, res) => {
    MenuItem.findById(req.params.id)
    .then(menuItem => {
      if (menuItem) {
        return menuItem.updateOne(req.body.menuItem);
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
      // If the update succeeded, return 200 and no JSON
      res.status(200).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
  });




  /*
 * Action:       DESTROY
 * Method:       DELETE
 * URI:          /api/menu-items/id
 * Description:  Delete a menu item by item ID
 */

router.delete("/api/menu-items/:id", (req, res) => {
    MenuItem.findById(req.params.id)
      .then(menuItem => {
        if (menuItem) {
          // Pass the result of Mongoose's `.delete` method to the next `.then`
          return menuItem.remove();
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
  
  // Export the Router so we can use it in the server.js file
  module.exports = router;