steal('can/model', function($) {

    can.Model("CanBaseball.Models.NavItems", {

        findAll : 'GET /navitems',
        findOne : 'GET /navitems/{id}',
        create  : 'POST /navitems',
        update  : 'PUT /navitems/{id}',
        destroy : 'DELETE /navitems/{id}'
    }, {});
});