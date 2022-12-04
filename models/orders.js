const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const OrdersScheme = new mongoose.Schema(
    {
        client: {
            type: String
                },
        productOrder:{ 
            type: Array ({
               
                name:{
                    type: String
                },
                qty:{
                    type: Number
                }
             })
        }, 
         status: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

OrdersScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('orders', OrdersScheme)