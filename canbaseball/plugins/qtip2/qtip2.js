steal('./jquery.qtip.js', './jquery.qtip.css', function() {

	// Set the defaults for the qTip tooltip plugin
	$.extend(true, $.fn.qtip.defaults, {
		style: {
			classes: "ui-tooltip-blue ui-tooltip-rounded ui-tooltip-shadow"
		}
	});
});