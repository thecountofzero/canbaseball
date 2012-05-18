steal('can/util/jquery', function() {

	var MYAPP = MYAPP || {};
	
	MYAPP.namespace = function(ns) {
		var parts = ns.split('.'),
			parent = MYAPP,
			i;
		
		if(parts[0] === "MYAPP") {
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
	
	window.MYAPP = $MYAPP = MYAPP;
});