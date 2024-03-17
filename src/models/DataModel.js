const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    rankings: {
       type:Number,
       unique:true,
       required:true
    },
    dob:{
        type:Date,  
        required:true,
        trim: true
    },
    country:{
        type:String,
        required:true,
        trim: true
    },
    event:{
        type:String,
        default:"100m",
        
    },
    score:{
        type:Number,
        required:true,
    }
});

const MenRanking =new mongoose.model('MenRanking',menSchema);

module.exports = MenRanking;