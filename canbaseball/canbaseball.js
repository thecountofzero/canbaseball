steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control', 'can/view/ejs', 'can/route', 'can/control/route').
then('canbaseball/lib/canbaseball',
    'tcoz/lib/util',
    'tcoz/lib/localization',
    'canbaseball/lib/ajaxsettings.js',
    'canbaseball/widgets/status_panel',
    'canbaseball/widgets/navigation',
    'tcoz/app_switcher',
    'tcoz/breadcrumb',
    'canbaseball/dashboard',
    'canbaseball/standings',
    'canbaseball/resources/css', function($) {

    can.route(':app');
    can.route(':app/:appId');
    can.route('', {app: 'dashboard'});

    tcoz.localization.init().loadDictionary('resources/locales', function() {
        $(document).ready(function() {

            new TCOZ.AppSwitcher($('#mainContent'), {
                apps: {
                    'dashboard': {
                        app: CanBaseball.Apps.Dashboard,
                        opts: {name: 'Ryan Braun'}
                    },
                    'standings': CanBaseball.Apps.Standings
                },
                useAppSpace: false,
                appOpts: {name: 'mikey'}
            });

            $('.topNav').append(can.view('views/topnav.ejs'));
            $('.search').append(can.view('views/search.ejs'));
            $('footer').append(can.view('views/footer.ejs'));

            new CanBaseball.Widgets.Navigation('nav', {});
            new CanBaseball.Widgets.StatusPanel('.topContent', {});
            new TCOZ.Breadcrumb('.breadcrumb h5');
        });
    });
    
});