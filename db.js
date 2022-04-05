const mongoose= require("mongoose");
var mongoURL ='mongodb+srv://AdminHypnos:Missing12@cluster0.4keds.mongodb.net/hotelhypnos'


mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true})

var connection=mongoose.connection

connection.on('erreur', ()=>{
    console.log('connexion à la base de donnee impossible')
})
connection.on("connecte",()=>{
    console.log('Mongo Db Connexion reussie')
})

module.exports=mongoose