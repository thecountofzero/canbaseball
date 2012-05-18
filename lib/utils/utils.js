steal('canbaseball/lib/canbaseball.js', function() {
	
	MYAPP.utils = {

		isObject: function(obj) {
			return typeof obj === 'object' && obj !== null && obj && !(obj instanceof Date);
		},
		
		isString: function(arg) {
			return Object.prototype.toString.call(arg) == '[object String]';
		}
	};
});


