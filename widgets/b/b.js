steal('can/control', 'can/view/ejs', 'canbaseball/models/team.js').
	then('canbaseball/plugins/jquery.corner.js', function($) {

	can.Control("B", {}, {

		init : function() {
			Team.findAll({}, function(t) {
				console.dir(t);
			});
		}
	});
});
