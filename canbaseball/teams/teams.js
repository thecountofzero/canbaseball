steal('can/control', function($) {

    window.CanBaseball = window.CanBaseball || {};
    window.CanBaseball.Apps = window.CanBaseball.Apps || {};

    window.CanBaseball.Apps.Teams = can.Control({

        init : function() {
            this.element.append('Teams App');
        }
    });
});