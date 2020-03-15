const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

// Difine the Order Schema ... 
const orderSchema = new Schema ({ 

    itemsList : [
        {
            type: Schema.Types.ObjectId,
            ref:'MenuItems'
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
const Order = mongoose.model('Order' , orderSchema )

//Export the modle 
module.exports = Order ; 
