steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'canbaseball/widgets/standings',
    'canbaseball/widgets/stats_leaders',
    'canbaseball/ui/collapsible', function($) {

    can.Control("CanBaseball.Players", {
        // Initialize the Dashboard
        init : function() {
            var self = this;

            this.element.append(can.view('//canbaseball/dashboard/dashboard.ejs', {}));

            new CanBaseball.Standings('#standingsContent', {});
            new CanBaseball.StatsLeaders('#statsContent', {});

            new CanBaseball.UI.Collapsible('#standings', {});
            new CanBaseball.UI.Collapsible('#stats', {});
            //new CanBaseball.UI.Collapsible('#playerNews', {});
        },

        "{can.route} appId": function(route, ev, newVal, oldVal) {
            console.log('change: ' + newVal + ':' + oldVal);
        },

        destroy: function() {
            console.log('dashboard destroy');
            can.Control.prototype.destroy.call(this);
        }
    });
});