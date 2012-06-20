steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs')
.then('canbaseball/lib/canbaseball/utils',
    'tcoz/lib/localization/localization-alt.js',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/models/standings.js', function($) {

    can.Control("CanBaseball.Standings", {

        defaults: {}
    }, {
        init : function() {
            var self = this;
            tcoz.localization.init().loadDictionary('/canbaseball/canbaseball/widgets/standings/locales', function() {

                can.view('//canbaseball/widgets/standings/standings.ejs', {
                    standings: CanBaseball.Models.Standings.findOne({id: 'STANDINGS'}, function(s) {
                        self.standings = s;
                    })
                }).then(function(frag) {
                    self.element.append(frag);
                });
            });
        },

        destroy: function() {
            console.log('standings destroy');
        }
    });
});