steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/lib/utils',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'canbaseball/dashboard',
    'canbaseball/resources/css', function($) {

    Router = can.Control({

        init: function() {
            this.currentApp = '';
            this.mainContent = $('#mainContent');
        },

        "{can.route} app": function(data) {
            var app = data.app;

            if(this.currentApp !== app) {
                this.mainContent.empty().append('<div id="app"></div>');

                if(app === 'dashboard') {
                    console.log('loading dashboard');
                    new CanBaseball.Dashboard(this.mainContent.find('#app'));
                }
            }

            this.currentApp = app;
        }
    });

    can.route(':app');
    can.route(':app/:appId');
    can.route('', {app: 'dashboard'});

    new Router(window);

    $(document).ready(function() {
        new CanBaseball.Navigation('nav', {});
        new CanBaseball.StatusPanel('.topContent', {});
        //new CanBaseball.Dashboard('#mainContent');
    });
    
});