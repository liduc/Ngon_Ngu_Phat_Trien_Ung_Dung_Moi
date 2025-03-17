let mongoose = require('mongoose')
let categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },description:{
        type:String,
        default:"",
    }
},{
    timestamps:true
})