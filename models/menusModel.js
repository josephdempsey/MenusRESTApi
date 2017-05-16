var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var menuModel=new Schema({
    title:String,
    mealType:String,
    rating:Number,
    isLunchDeal:{type:Boolean, default:true}
});

module.exports=mongoose.model('menus', menuModel);