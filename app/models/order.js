const mongoose = require ('mongoose')

// Difine the Order Schema ... 
const orderSchema = new mongoose.Schema ({ 
    itemsList : [{menuItemID: String , quantity : Number }],
    totalPrice : { type : Number , sequired : true },
    discount :Number,
    tax : { type : Number , sequired : true },
    userId : { type : String , sequired : true },
}, 
{
    timestamps : true ,
}
)

// Compile our Model based on the Schema 
Order = mongoose.model('Order' , orderSchema )

//Export the modle 
module.exports = Order ; 