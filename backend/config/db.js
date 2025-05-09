const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/Personaldata1").then(function(){
    console.log("connected")
})
module.export= mongoose.connection