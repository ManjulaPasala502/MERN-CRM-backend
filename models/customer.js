const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    company:String,
    notes:String,
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
})
module.exports=mongoose.model('Customer',customerSchema)