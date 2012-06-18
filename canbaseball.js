steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/lib/utils',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'tcoz/app_switcher',
    'canbaseball/dashboard',
    'canbaseball/widgets/standings',
    'canbaseball/resources/css', function($) {


    new TCOZ.AppSwitcher($('#mainContent'), {
        apps: {
            'dashboard': CanBaseball.Dashboard,
            'standings': CanBaseball.Standings
        }
    });

    $(document).ready(function() {
        new CanBaseball.Navigation('nav', {});
        new CanBaseball.StatusPanel('.topContent', {});
    });
    
});