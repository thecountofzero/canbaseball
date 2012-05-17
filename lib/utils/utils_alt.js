steal('canbaseball/lib/canbaseball.js', function() {

	MYAPP.namespace('MYAPP.utils');
	
	MYAPP.utils = {

		isObject: function(arg) {
			return typeof arg === 'object' && arg !== null && arg;
		},
		
		isString: function(arg) {
			return Object.prototype.toString.call(arg) == '[object String]';
		}
	};
});
