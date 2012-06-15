steal('can/model', function($) {

    can.Model("CanBaseball.Models.Stats", {

        findAll : 'GET /stats',
        findOne : 'GET /stats/{id}',
        create  : 'POST /stats',
        update  : 'PUT /stats/{id}',
        destroy : 'DELETE /stats/{id}'
    }, {});
});