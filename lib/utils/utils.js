steal('canbaseball/lib/canbaseball.js', function() {

	MYAPP.namespace('MYAPP.utils');
	
	MYAPP.utils = (function() {
		
		var isObject = function(arg){
			return typeof arg === 'object' && arg !== null && arg;
		},
		
		isString = function(arg) {
			return Object.prototype.toString.call(arg) == '[object String]';
		};
		
		return {
			isObject: isObject,
			isString: isString
		};
		
	}());

});

