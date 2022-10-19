const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/hotel",{
    
    
    useUnifiedTopology :true,

}).then(()=>{
    console.log("Db crated ");
}).catch(error=>{
    console.log(error);
})