require("dotenv").config();
//const { connect } = require('http')
const mongoose = require('mongoose')


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


