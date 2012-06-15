steal('can/util/jquery', function($) {

	(function(window) {
		
		var CANBASEBALL = window.CANBASEBALL || {};

		init = function() {

			$.when(CANBASEBALL.getConfig()).then(function(config) {
				
				config = config.config;
				CANBASEBALL.config = config;

				CANBASEBALL.about = (function() {
					return {
						"version": config.javascriptAPI.version,
						"name": config.javascriptAPI.name
					};
				})();
			});
		};

		CANBASEBALL.getConfig = function(force) {

			var config = {};
			force = force || false;

			if(!CANBASEBALL.initialized || force) {
				return $.ajax({
					url: '/donejs/canbaseball/resources/config/config.json',
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
		};
		
		CANBASEBALL.namespace = function(ns) {
			var parts = ns.split('.'),
				parent = CANBASEBALL,
				i;
			
			if(parts[0] === "CANBASEBALL") {
				parts = parts.slice(1);
			}
			
			for(i=0; i<parts.length; i+=1) {
				if(typeof parent[parts[i]] === "undefined") {
					parent[parts[i]] = {};
				}
				parent = parent[parts[i]];
			}
			return parent;
		};

		if(!CANBASEBALL.initialized) {
			init();
		}
		
		window.CANBASEBALL = $CANBASEBALL = CANBASEBALL;
		
	}(window));
	
});