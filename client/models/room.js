const mongoose = require('mongoose');
const {roomSchema} = mongoose.Schema({

    Suite:{
        type:String,
        required :true
    },
    descriptif:{
        type:String,
        required:true
    },
    Prix:{
        type:Number,
        required:true
    },
    imageurls:[],
    lienBookingurl:[],
    chambreDispo:[],

    etablissement:{
        type:String,
        required:true
    },
    timesstamps:true,
})

const roomModel= mongoose.model('rooms',roomSchema)

module.exports=roomModel