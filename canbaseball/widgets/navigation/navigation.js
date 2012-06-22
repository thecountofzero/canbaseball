steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control',
	'can/view/ejs')
.then('canbaseball/models/nav_items.js',
	'tcoz/ui/collapsible_menu',
	'canbaseball/resources/css', function($) {

	window.CanBaseball = window.CanBaseball || {};
	window.CanBaseball.Widgets = window.CanBaseball.Widgets || {};

	window.CanBaseball.Widgets.Navigation = can.Control({

		init : function() {
			var self = this;

			can.view('//canbaseball/widgets/navigation/views/navigation.ejs', {
				navItems: CanBaseball.Models.NavItems.findAll({}, function(navItems) {
					self.navigationItems = navItems;
				})
			}).then(function(frag) {
				self.element.append(frag);
				self.menuItems = self.element.find('ul.menu > li');
				new TCOZ.UI.CollapsibleMenu('ul.menu');
			});
		},

		"ul.menu > li click": function(el, ev) {
			this.menuItems.find('> a').removeClass('active');
			el.find('> a').addClass('active');
		}
	});
});