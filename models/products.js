const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductsScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
         price:{
            type: Number
        }, 
         image: {
            type: String
        },
          category: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

ProductsScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('products', ProductsScheme)