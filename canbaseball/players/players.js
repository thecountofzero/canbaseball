steal('can/control', function($) {

    window.CanBaseball = window.CanBaseball || {};
    window.CanBaseball.Apps = window.CanBaseball.Apps || {};

    window.CanBaseball.Apps.Players = can.Control({

        init : function() {
            this.element.append('Player App');
        }
    });
});