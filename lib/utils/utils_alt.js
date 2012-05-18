steal('canbaseball/lib/canbaseball.js', function() {

	//MYAPP.namespace('MYAPP.utils');
	//can.getObject('MYAPP.utils', window, true);
	
	MYAPP.utils = (function() {
		
		var isObject = function(obj){
			return typeof obj === 'object' && obj !== null && obj && !(obj instanceof Date);
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