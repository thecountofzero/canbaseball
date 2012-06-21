steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs')
.then('canbaseball/lib/ajaxsettings.js',
    'canbaseball/models/stats.js', function($) {

    window.CanBaseball = window.CanBaseball || {};

    window.CanBaseball.StatsLeaders = can.Control({
        
        init : function() {
            var self = this;

            can.view('//canbaseball/widgets/stats_leaders/stats_leaders.ejs', {
                players: CanBaseball.Models.Stats.findAll({}, function(s) {
                    self.stats = s;
                })
            }).then(function(frag) {
                self.element.append(frag);
            });
        }
    });
});