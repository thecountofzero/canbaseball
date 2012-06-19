steal('can/model', function($) {

	can.Model("CanBaseball.Models.Scoreboard", {
		findAll : 'GET /scoreboards',
		findOne : 'GET /scoreboards/{id}',
		create  : 'POST /scoreboards',
		update  : 'PUT /scoreboards/{id}',
		destroy : 'DELETE /scoreboards/{id}'
	}, {});
});