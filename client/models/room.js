const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const { mongoose } = mongoose.Schema({

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
    }
})

