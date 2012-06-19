steal('canbaseball/lib/canbaseball')
	
.then(function($) {

	CANBASEBALL.namespace('CANBASEBALL.utils');
	
	CANBASEBALL.utils = (function() {
		
		var isObject = function(arg){
			return typeof arg === 'object' && arg !== null && arg;
		},
		
		isString = function(arg) {
			//return typeof arg === 'string' && arg !== undefined;
			return Object.prototype.toString.call(arg) == '[object String]';
		},

		getThreshold = function(id, def) {
			var t = CANBASEBALL.config.thresholds[id];
			return (t ? t : def);
		},
		
		escapeHTML = function(content, doQuotes){
			var str = content.replace(/&/g,'&amp;')
				.replace(/</g,'&lt;')
				.replace(/>/g,'&gt;');
					
			if(doQuotes) {
				str = str.replace(/"/g, '&#34;')
				.replace(/'/g, "&#39;");
			}
			return str;
		},
		
		removeUnderscores = function(str) {
			//return str.replace(/_/g, " ");
			return str ? str.split("_").join(" ") : "";
		},
		
		getFilename = function(path) {
			if (path) {
				return path.split("\\").pop();
			}
			else {
				return "";
			}
		},
		
		unique = function (arrVal) {
			var uniqueArr = [];
			for (var i = arrVal.length; i--; ) {
				var val = arrVal[i];
				if ($.inArray(val, uniqueArr) === -1) {
					uniqueArr.unshift(val);
				}
			}
			return uniqueArr;
		},
		
        truncate = function(input, length) {
            if (input === null || input === undefined) {
                return '';
            }
            
            // Set the default value in case a length was not specified
            length = length || 30;
            
            if (input.length <= length) {
                return input;
            }
            else {
                return input.substring(0, length) + "...";
            }
        };
		
		return {
			isObject: isObject,
			isString: isString,
			getThreshold: getThreshold,
			removeUnderscores: removeUnderscores,
			unique: unique,
			getFilename: getFilename,
			escapeHTML: escapeHTML,
			truncate: truncate
		};
		
	}());

});

