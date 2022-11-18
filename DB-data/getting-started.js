const mongoose = require('mongoose');

const dbconection =async()=>{
    try{
        await mongoose.connect(
            'mongodb+srv://Administrador:Admin12345@cluster0.8klxeuu.mongodb.net/test',{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
            console.log('se conecto');
    }
    catch(err){
        console.log(err);
        //throw new Error('errror')
    }
}


    dbconection()
