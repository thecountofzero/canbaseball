steal('can/model', function($) {

	can.Model("Team", {
		findAll : 'GET /teams',
		findOne : 'GET /teams/{id}',
		create  : 'POST /teams',
		update  : 'PUT /teams/{id}',
		destroy : 'DELETE /teams/{id}'
	}, {});
});