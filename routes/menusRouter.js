var express=require('express');
var Menu = require('./../models/menusModel')


var menusController=require('./../controllers/menusController')(Menu)
var menusRouter = express.Router();

menusRouter.route('')
    .get(menusController.get)
    .post(menusController.add)
    .delete(menusController.del);

menusRouter.route('/:id')
    .get(menusController.getById)
    .put(menusController.update)
    .patch(menusController.patch)

module.exports=menusRouter;