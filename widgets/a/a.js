steal('can/control', 'can/view/ejs', 'canbaseball/models/player.js').
	then('canbaseball/plugins/jquery.corner.js', function($) {

	can.Control("A", {}, {

		init : function() {
			Player.findAll({}, function(p) {
				console.dir(p);
			});
		}
	});
});