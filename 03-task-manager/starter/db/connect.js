const mongoose=require('mongoose')


const connectDB=(url)=>{
    return mongoose.connect(url)
    // we are retuning promise
}

module.exports=connectDB
//mongoose.connect is a promise
// mongoose.connect(connectionString,{
//     // useNewUrlParser:true,
//     // useCreateIndex:true,
//     // useUnifiedTopology:true,
//     // useFindAndModify:false
// })
// .then(()=>console.log('connected to DB'))
// .catch((err)=>console.log(err))

