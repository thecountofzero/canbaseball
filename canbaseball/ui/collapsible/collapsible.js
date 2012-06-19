steal('can/control', './collapsible.css', function($) {

    can.Control("CanBaseball.UI.Collapsible", {

        defaults: {
            event: 'click',
            closeEvent: 'click',
            defaultOpen: true,
            cssOpen: 'accordion-close',
            cssClose: 'accordion-open'
        }
    }, {

        // Initialize the Status Panel
        init : function() {
            var self = this,
                opts = this.options,
                cssClass = opts.defaultOpen ? opts.cssOpen : opts.cssClose;

            this.element.removeClass([opts.cssClose, opts.cssOpen].join(' ')).addClass('collapsible ' + cssClass).append('<span class="collapser"></span>');

            this.collapseEl = this.element.next();

            this.collapseEl[opts.defaultOpen ? 'slideDown' : 'slideUp']();
        },

        "{event}": function(el, ev) {
            this._toggle(el, ev);
        },

        "{closeEvent}": function(el, ev) {
            var opts = this.options;
            if(opts.event.toLowerCase() !== opts.closeEvent.toLowerCase()) {
                this._toggle(el, ev);
            }
        },

        _toggle: function(el, ev) {
            var target = $(ev.target);

            this.element.toggleClass([this.options.cssClose, this.options.cssOpen].join(' '));
            this.collapseEl.slideToggle();
        },

        destroy: function() {
            this.element.removeClass('opened closed collapsible');
            this.element.find('.collapser').remove();
            can.Control.prototype.destroy.call(this);
        }
    });
});