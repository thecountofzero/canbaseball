steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/lib/canbaseball/utils',
    'canbaseball/plugins/localization.js',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'canbaseball/tcoz/app_switcher',
    'canbaseball/dashboard',
    'canbaseball/widgets/standings',
    'canbaseball/resources/css', function($) {

    can.route(':app');
    can.route(':app/:appId');
    can.route('', {app: 'dashboard'});

    $tcoz.localization.init().loadDictionary('resources/locales', function() {

        $(document).ready(function() {

            new TCOZ.AppSwitcher($('#mainContent'), {
                apps: {
                    'dashboard': CanBaseball.Dashboard,
                    'standings': CanBaseball.Standings
                },
                useAppSpace: false
            });

            $('.topNav').append(can.view('views/topnav.ejs'));
            $('.search').append(can.view('views/search.ejs'));
            $('footer').append(can.view('views/footer.ejs'));

            new CanBaseball.Navigation('nav', {});
            new CanBaseball.StatusPanel('.topContent', {});
        });
    });
    
});