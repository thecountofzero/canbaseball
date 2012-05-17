steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs').
	then('canbaseball/widgets/a', 'canbaseball/widgets/b', function($) {

	canbaseball = can.Control({
		// Initialize the Dashboard
		init : function() {
		}
	});

	// Initialize the app
	//new CloudArray.StatusPanel('#statusPanel', {});
	new A('#scoreboard', {});
	new B('#cacheOverview', {});
});