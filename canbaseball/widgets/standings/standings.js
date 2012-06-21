steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs')
.then('tcoz/lib/localization',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/models/standings.js', function($) {

    window.CanBaseball = window.CanBaseball || {};

    window.CanBaseball.Standings = can.Control({
        
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