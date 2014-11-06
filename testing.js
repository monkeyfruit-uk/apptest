window.testing = new (function(){

	var me = this;
	var shortTimeout = 2000;
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

	me.moreScreen = function(ref){
		setTimeout(function(){
			$('a.more').click();
			setTimeout(function(){
				$('.moreList a').first().click();
				setTimeout(function(){
					$('.cameraContent .camera').click();
					setTimeout(function(){
						$('#photo-take').click();
					}, extendedTimeout);
				}, extendedTimeout);
			}, extendedTimeout);
		}, shortTimeout);
	}


	// 
	me.start = function(){
		//me.adviceScreen();
		me.moreScreen();
	}

	//
	me.setComplete = function(){
		
	};
})();