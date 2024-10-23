const { required } = require('joi');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {type:String, required:['Title is required']},
    description: {type:String, required:['Description is required']},
    sku:{type:String, required:['SKU is required']},
    category:{type:String, required:['Category is required']},
    categoryId:{type:String, required:false},
    subCategory:{type:String, required:false},
    displayType:{type:String, required:['Display type is required']},
    featureTypeId:{type:String, required:['Feature type id is required']},
    actualPrice:{type:String, required:['Price is required']},
    discountPrice:{type:String, required:['Discount price is required']},
    deliveryType : {type:String, required:['Delivery type is required']},
    availability: {type:String, required:['Available is required']},
    url:{type:String, required:['Url is required']},
    storageurlArr:{type:Array, required:false},
    imageurl:{type:String, required:false},
    isActive:{type:Boolean, required:false},
},{timestamps:true, versionKey:false})


module.exports = mongoose.model('Product', productSchema);

