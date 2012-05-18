steal('can/control', 'can/view/ejs', 'canbaseball/models/team.js').
	then('canbaseball/plugins/jquery.corner.js', function($) {

	can.Control("C", {}, {

		init : function() {
			Team.findAll({}, function(t) {
				console.dir(t);
			});
		}
	});
});
