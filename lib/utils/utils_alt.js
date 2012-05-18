steal('canbaseball/lib/canbaseball.js', function() {

	//MYAPP.namespace('MYAPP.utils');

	var p = 'mikey';
	
	MYAPP.utils = {

		isObject: function(obj) {
			return typeof obj === 'object' && obj !== null && obj && !(obj instanceof Date);
		},
		
		isString: function(arg) {
			return Object.prototype.toString.call(arg) == '[object String]';
		}
	};

	MYAPP.utils.something = function() {
		return 'something ' + p;
	};
});
