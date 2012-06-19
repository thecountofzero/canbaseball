steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/widgets/status_panel',
	'canbaseball/widgets/navigation',
	'canbaseball/widgets/standings',
	'canbaseball/widgets/stats_leaders',
	'canbaseball/ui/collapsible',
	'canbaseball/resources/css',
	'canbaseball/plugins/jquery.ba-dotimeout.min.js', function($) {

	can.Control("CanBaseball.Dashboard", {
	}, {
		// Initialize the Dashboard
		init : function() {
			var self = this;

			this.element.append(can.view('//canbaseball/dashboard/dashboard.ejs', {}));

			this.standingsControl = new CanBaseball.Standings('#standingsContent', {});
			new CanBaseball.StatsLeaders('#statsContent', {});

			new CanBaseball.UI.Collapsible('#standings', {});
			new CanBaseball.UI.Collapsible('#stats', {});
		},

		"{can.route} appId": function(route, ev, newVal, oldVal) {
			console.log('change: ' + newVal + ':' + oldVal);
		},

		" paused": function(el, ev) {
		},

		destroy: function() {
			//this.standingsControl.destroy();
			can.Control.prototype.destroy.call(this);
		}
	});
});