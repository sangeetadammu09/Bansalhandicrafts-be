const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {type:String, required:['Title is required']},
    description: {type:String, required:['Description is required']},
    sku:{type:String, required:['SKU is required']},
    category:{type:String, required:['Category is required']},
    categoryId:{type:String},
    subCategory:{type:String},
    displayType:{type:String, required:['Display type is required']},
    featureType:{type:String, required:['Feature type is required']},
    price:{type:String, required:['Price is required']},
    url:{type:String, required:['Url is required']},
    storageurlArr:{type:Array, required:false},
    isActive:{type:Boolean, required:false},
},{timestamps:true, versionKey:false})


module.exports = mongoose.model('Product', productSchema);

