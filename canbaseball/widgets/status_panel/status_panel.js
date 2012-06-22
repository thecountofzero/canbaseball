steal({src: 'canbaseball/fixtures/fixtures.js', ignore: true});

steal('can/control',
    'can/view/ejs',
    'canbaseball/models/status.js',
    './status_panel.css').
then('canbaseball/plugins/jquery.ba-dotimeout.min.js',
    'canbaseball/plugins/qtip2', function($) {

    window.CanBaseball = window.CanBaseball || {};
    window.CanBaseball.Widgets = window.CanBaseball.Widgets || {};

	window.CanBaseball.Widgets.StatusPanel = can.Control({

		defaults: {
			pollerName: 'statusPoller',
			pollingInterval: 4000
		}
	}, {

		// Initialize the Status Panel
		init : function() {
			var self = this;

			this.numStatuses = 0;

			// Render Status Panel
			can.view('//canbaseball/widgets/status_panel/views/status_panel.ejs', {
				statuses: CanBaseball.Models.Status.findAll({}, function(statuses) {
					self.statuses = statuses;
					self.numStatuses = statuses.length;
				})
			}).then(function(frag) {
				self.element.append(frag);
				self._initTooltips();
				self._initPolling();
			});
		},

		_update: function() {
			var changingStatus = Math.floor(Math.random() * 10) % this.numStatuses,
				newValue = Math.floor(Math.random() * 3);
			this.statuses[changingStatus].attr("status", newValue);
		},

        _initPolling: function() {
            var self = this;
           
            $.doTimeout(this.options.pollerName, this.options.pollingInterval, function() {
                self._update();
                return true; //run forever
            });
        },

        _initTooltips: function () {
			this.element.find('ul li').each(function() {
				var a = $(this).find('a');
				a.qtip({
					content: $(a).data('tooltip')
				});
			});
        },

        _getStatus: function(statusId) {
			return CanBaseball.Models.Status.model({
				componentId: statusId
			});
        },

        ' statusChange': function(el, ev, status) {
			this.updateStatus(status);
        },

        update: function() {
			$.doTimeout(this.options.pollerName, true);
        },

        updateStatus: function(status) {
			this._getStatus(status.statusId).attr('status', status.status);
        }
	});
});