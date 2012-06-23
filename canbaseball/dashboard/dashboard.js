steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/standings',
	'canbaseball/widgets/status_panel',
	'canbaseball/widgets/navigation',
	'canbaseball/widgets/stats_leaders',
	'tcoz/ui/collapsible',
	'canbaseball/resources/css',
	'canbaseball/plugins/jquery.ba-dotimeout.min.js', function($) {

	window.CanBaseball = window.CanBaseball || {};
	window.CanBaseball.Apps = window.CanBaseball.Apps || {};

	window.CanBaseball.Apps.Dashboard = can.Control({

		// Initialize the Dashboard
		init : function() {
			var self = this;

			this.element.append(can.view('//canbaseball/dashboard/views/dashboard.ejs'));

			this.standingsControl = new CanBaseball.Apps.Standings('#standingsContent');
			new CanBaseball.Widgets.StatsLeaders('#statsContent');

			new TCOZ.UI.Collapsible('#standings');
			new TCOZ.UI.Collapsible('#stats');
		},

		" paused": function(el, ev) {
			console.log('The Dashboard has been paused...');
		},

		" resumed": function(el, ev) {
			console.log('The Dashboard has been RESUMED');
		},

		destroy: function() {
			//this.standingsControl.destroy();
			can.Control.prototype.destroy.call(this);
		}
	});
});