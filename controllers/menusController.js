var menuController = function (Menu) {
    var get = function (req, res) {
        Menu.find(function (err, menus) {
            if (err) {
                res.status(500);
                res.send('Internal server error')
            } else {
                res.status(200);
                res.send(menus);
            }
        })
    };

    var add = function (req, res) {
        var menu = new Menu(req.body);
        menu.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Failed to add Menu')
            } else {
                res.status(201);
                res.send(menu)
            }
        });
    };

    var getById = function (req, res) {
        Menu.findById(req.params.id, function (err, menu) {
            if (err) {
                res.status(404);
                res.send('Not Found');
            } else {
                res.status(200);
                res.send(menu);
            }
        })
    }

    var update = function (req, res) {
        Menu.findById(req.params.id, function (err, menu) {
            if (err) {
                res.status(404);
                res.send('not found');
            } else {
                menu.title = req.body.title;
                menu.mealType = req.body.mealType;
                menu.rating = req.body.rating;
                menu.isLunchDeal = req.body.isLunchDeal;

                menu.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(menu)
                    } else {
                        res.status(500);
                        res.send('Failed');
                    }
                });

            }
        });
    }

    var patch = function (req, res) {
        Menu.findById(req.params.id, function (err, menu) {
            if (!err) {
                if (req.body._id) {
                    delete req.body._id;
                }
                for (var p in req.body) {
                    menu[p] = req.body[p];
                }

                menu.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(menu)
                    }
                });
            }
        });
    }

    var del = function (req, res) {
        Menu.findById(req.body._id, function (err, menu) {
            menu.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Removed');
                } else {
                    res.status(404);
                    res.send("Id doesn't exist");
                }
            });
        });
    }

    return {
        get: get,
        getById: getById,
        add: add,
        update: update,
        patch: patch,
        del: del
    }

}

module.exports = menuController;