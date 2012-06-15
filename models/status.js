steal('can/model', 'can/observe/setter', function($) {

	can.Model("CanBaseball.Models.Status", {

		id: "componentId",

		defaults: {
			statusClass: 'statusOk'
		},

		findAll : 'GET /statuses',
		findOne : 'GET /statuses/{id}',
		create  : 'POST /statuses',
		update  : 'PUT /statuses/{id}',
		destroy : 'DELETE /statuses/{id}'
	}, {
		setStatus: function(status) {
			this.attr('statusClass', status===1 ? 'statusOk' : status===2 ? 'statusWarn' : 'statusErr');
		}
	});
});