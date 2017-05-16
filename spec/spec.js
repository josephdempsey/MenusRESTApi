describe('menusController', function(){

var menuController, menu, req, res;
menu={find: jasmine.createSpy(), findById: jasmine.createSpy()};
req={params: {id:123}};
res={send: jasmine.createSpy(), status: jasmine.createSpy()};
menuController=require('./../controllers/menusController')(Menu)

    describe('Get', function(){
        it('should call menu.find function', function(){
            menuController.get(req, res);
            expect(menu.find).toHaveBeenCalled();
        });
    });

    describe('get by id', function(){
        it('should call menu.findById function', function(){
            menuController.getById(req, res);
            expect(menu.findById).toHaveBeenCalled();
        });
    });
    
});