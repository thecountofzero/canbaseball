steal('can/model', function($) {

	can.Model("Player", {
		findAll : 'GET /players',
		findOne : 'GET /players/{id}',
		create  : 'POST /players',
		update  : 'PUT /players/{id}',
		destroy : 'DELETE /players/{id}'
	}, {});
});