steal({
	src: 'can/util/fixture',
	ignore: true
}).then(function() {

	can.fixture('GET /players', '//canbaseball/fixtures/players.json');
	can.fixture('GET /teams', '//canbaseball/fixtures/teams.json');
});