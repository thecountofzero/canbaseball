steal('can/model', function($) {

    can.Model("CanBaseball.Models.Standings", {

        findAll : 'GET /standingss',
        findOne : 'GET /standingss/{id}',
        create  : 'POST /standingss',
        update  : 'PUT /standingss/{id}',
        destroy : 'DELETE /standingss/{id}'
    }, {});
});