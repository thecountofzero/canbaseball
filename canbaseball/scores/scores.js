steal('can/control', function($) {

    window.CanBaseball = window.CanBaseball || {};
    window.CanBaseball.Apps = window.CanBaseball.Apps || {};

    window.CanBaseball.Apps.Scores = can.Control({

        init : function() {
            this.element.append('Scores App');
        }
    });
});