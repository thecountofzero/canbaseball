steal({
	src: 'can/util/fixture',
	ignore: true
}).then(function() {

	can.fixture('GET /statuses', '//canbaseball/fixtures/statuses.json');

    can.fixture('GET /standingss/{id}', '//canbaseball/fixtures/standings.json');

    can.fixture('GET /navitems', '//canbaseball/fixtures/nav_items.json');

    can.fixture('GET /stats', '//canbaseball/fixtures/stats.json');
});