//const { connect } = require('http')
const mongoose = require('mongoose')

console.log(process.env.DB_URL)

//const DB_URI = 'mongodb://localhost:27017/db_prueba'
//const DB_URI = ''

module.exports = () => {

  const connect = () => {

    mongoose.connect(
      process.env.DB_URL,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log("DB: ERROR! ");
        }else{
          console.log('Conexión correcta')
        }
      }
    )
  }
  connect();
}


