const mongoose = require ('mongoose')

// Difine the Order Schema ... 
const orderSchema = new mongoose.Schema ({ 
    itemsList : [
        {
            type: Schema.Types.ObjctId,
            ref:'MenuItem'
        }
    ],
    totalPrice : { type : Number , required : true },
    discount :Number,
    tax : { type : Number , required : true },
    userId : { type : String , required : true },
}, 
{
    timestamps : true ,
}
)

// Compile our Model based on the Schema 
Order = mongoose.model('Order' , orderSchema )

//Export the modle 
module.exports = Order ; 