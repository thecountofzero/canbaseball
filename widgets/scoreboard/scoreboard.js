steal('can/control', 'can/view/ejs', 'cloudarray/models/scoreboard.js', './scoreboard.css', function($) {

	can.Control("CloudArray.Scoreboard", {

		// Initialize the Status Panel
		init : function() {
			var self = this;

			// Render Scoreboard
			can.view('//cloudarray/widgets/scoreboard/scoreboard.ejs', {
				scoreboard: CloudArray.Models.Scoreboard.findOne({id: "SCOREBOARD"}, function(scoreboard) {
					self.scoreboard = scoreboard;
				})
			}).then(function(frag) {
				self.element.append(frag);
			});
		},

		'#configureCloudProvider click': function(el, ev) {
			this.scoreboard.attr("cloudProviderExists", !(this.scoreboard.attr("cloudProviderExists")));
		}
	});
});