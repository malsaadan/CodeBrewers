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
router.post('/api/orders', /*async*/ (req, res) => {
// let unPopOrder=req.body.order
// console.log(" =============== 41 unPopOrder" , unPopOrder )

// const unPopList=unPopOrder.itemsList
// console.log( " =============== 43 unPopList" , unPopList)

// // MAP 
// // async 
// // function ... for map .. 


// async function popItems () { 
//    const popList=unPopList.map( (menuID,index)=>{ 
//     MenuItem.findById(menuID)
//     .then(menuItem => {
//       console.log(`========  54 MENU  =========` , menuItem)
//           console.log(`================= 55 POPLIST ============`,popList)

//       if (menuItem) {
//         return MenuItem ;
//       }
//       })
//         .catch((error) => {
//           res.status(500).json({ error: error });
//         });
//     })
  
//   return popList
// }
// const popList = await popItems()
// //}

// console.log(popList, `========== 69 POPLIST ==============`)
// unPopOrder.itemsList= await  popItems();
// console.log(`  ======= 71 CREAT ====== ${ unPopOrder.itemsList }`)
//    Order.create(unPopOrder)
    Order.create(req.body.order)
  

  // //creating the list

  //     console.log(`POST ? CREATE NEW ORDER `)
  //     const newItem=req.body
  //     console.log(`NEW ::: ${newItem}`)
  //     //return an object ... 
  //     //newItem ==> objects .. 
  //     //
  //     const item = new MenuItem ({ name : newItem })

  // Return all orders as an array of obj  
    .then((newOrder) => {
    res.status(201).json({newOrder}); 
  })
  
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
