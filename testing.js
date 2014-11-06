window.testing = new (function(){

	var me = this;
	var defaultTimeout = 6000; // 5 seconds
	var extendedTimeout = 10000; // 10 seconds

	// Show the advice screen
	me.adviceScreen = function(ref){
		setTimeout(function(){
			$('a.advice').click();
			setTimeout(function(){
				$('.adviceList a.ui-link').first().click();
				setTimeout(function(){
					$('#adviceDetailPainful .adviceDetailContent a').click();
					setTimeout(function(){ me.setComplete(ref); }, defaultTimeout);
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};


	// 
	me.start = function(){
		me.adviceScreen();
	}

	//
	me.setComplete = function(){
		
	};
})();