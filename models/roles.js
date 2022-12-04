const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

//no se ha conectado
const rolesScheme = new mongoose.Schema({
    neme: String
}, {
    versionKey: false
})

rolesScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('roles', rolesScheme)