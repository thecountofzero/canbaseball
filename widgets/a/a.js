steal('can/control', 'can/view/ejs', 'canbaseball/models/player.js').
	then(function($) {

	can.Control("A", {}, {

		init : function() {
			Player.findAll({}, function(p) {
				console.dir(p);
			});
		}
	});
});