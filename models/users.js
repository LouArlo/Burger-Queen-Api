const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UsersScheme = new mongoose.Schema(
    {      
        email:{
            type: String,
            required: true,
            unique: true          
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String
        } 
        
    },
    {
        versionKey: false,
        timestamps: true
    }
);

UsersScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('users', UsersScheme)