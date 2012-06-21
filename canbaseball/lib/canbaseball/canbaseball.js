steal('can/util/jquery', function($) {

    CANBASEBALL = window.CANBASEBALL || {
        initialized: false,
        config: {},
        about: {}
    };

    var init = function() {

        $.when(CANBASEBALL.getConfig()).then(function(config) {
            
            config = config.config;
            CANBASEBALL.config = config;

            CANBASEBALL.about =  {
                "version": config.javascriptAPI.version,
                "name": config.javascriptAPI.name
            };
        });
    };

    can.extend(CANBASEBALL, {

        getConfig: function(force) {

            var config = {};
            force = force || false;

            if(!this.initialized || force) {

                return $.ajax({
                    url: 'resources/config/config.json',
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success: function(data, textStatus, jqXHR) {
                        config = data;
                        CANBASEBALL.initialized = true;
                    }
                });
            }
            else {
                return config;
            }
        }
    });

    if(!CANBASEBALL.initialized) {
        init();
    }
});