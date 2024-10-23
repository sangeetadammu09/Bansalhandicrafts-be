const mongoose = require('mongoose');

const exibitionSchema = mongoose.Schema({
    title:{type:String, required:['Title is required']},
    description:{type:String, required:['Description is required']},
    sku:{type:String, required:['SKU is required']},
    category:{type:String, required:['Category is required']},
    categoryId:{type:String, required:false},
    subCategory:{type:String, required:false},
    url:{type:String, required:['Url is required']},
    storageurlArr:{type:Array, required:false},
    isActive:{type:Boolean, required:false},
    imageurl:{type:String, required:false},
    
},{timestamps:true})

module.exports = mongoose.model('exhibition', exibitionSchema)