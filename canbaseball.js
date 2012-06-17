steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/lib/utils',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'canbaseball/widgets/app_switcher',
    'canbaseball/dashboard',
    'canbaseball/resources/css', function($) {

    can.route(':app');
    can.route(':app/:appId');
    can.route('', {app: 'dashboard'});

    new CanBaseball.AppSwitcher($('#mainContent'), {
        apps: {
            'dashboard': CanBaseball.Dashboard
        }
    });

    $(document).ready(function() {
        new CanBaseball.Navigation('nav', {});
        new CanBaseball.StatusPanel('.topContent', {});
        //new CanBaseball.Dashboard('#mainContent');
    });
    
});