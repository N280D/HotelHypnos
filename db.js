const mongoose= require("mongoose");
var mongoURL ='mongodb+srv://AdminHypnos:Missing12@cluster0.4keds.mongodb.net/hotelhypnos'


mongoose.connect(mongonURL, {useUnifiedTopology:true , useNewUrlParser:true})

var connect=mongoose.connection

connect.on('error', ()=>{
    console.log('connexion à la base de donnee impossible');
})
connect.on('connected',()=>{
    console.log('Mongo Db Connexion reussie')
})

module.exports=mongoose