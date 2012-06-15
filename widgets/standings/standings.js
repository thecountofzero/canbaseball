steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs')
.then('canbaseball/lib/utils',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/models/standings.js', function($) {

    can.Control("CanBaseball.Standings", {

        defaults: {}
    }, {
        init : function() {
            var self = this;

            can.view('//canbaseball/widgets/standings/standings.ejs', {
                standings: CanBaseball.Models.Standings.findOne({id: 'STANDINGS'}, function(s) {
                    self.standings = s;
                })
            }).then(function(frag) {
                self.element.append(frag);
            });
        }
    });
});