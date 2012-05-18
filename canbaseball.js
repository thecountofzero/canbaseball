steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});


steal('can/control', 'can/view/ejs').
	then('canbaseball/lib/utils/utils_alt.js').
	then('./canbaseball.css').
	then('canbaseball/widgets/a', 'canbaseball/widgets/b', 'canbaseball/widgets/c', function($) {

	canbaseball = can.Control({
		init : function() {
		}
	});

	// Initialize the app
	//new CloudArray.StatusPanel('#statusPanel', {});
	new A('#a', {});
	new B('#b', {});
	new C('#c', {});

	console.log('is object: ' + MYAPP.utils.isObject(MYAPP.utils));
	console.log('something: ' + $MYAPP.utils.something());

	//var a = can.getObject('MYAPP.local',[], true);
	console.dir(MYAPP);
});