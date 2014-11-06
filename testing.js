window.testing = new (function(){

	var me = this;
	var shortTimeout = 2000; // 2 seconds
	var defaultTimeout = 4000; // 4 seconds
	var extendedTimeout = 80000; // 8 seconds

	me.advice = function(ref){
		setTimeout(function(){
			$('a.advice').click();
			setTimeout(function(){
				$('.adviceList a.ui-link').first().click();
				setTimeout(function(){
					$('#adviceDetailPainful .adviceDetailContent a').click();
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};

	me.more = function(ref){
		setTimeout(function(){
			$('a.more').click();
			setTimeout(function(){
				$('.moreList a').first().click();
				setTimeout(function(){
					$('#profile-name').val('Testing');
					$('#profile-submit').click();
					//$('.cameraContent .camera').click();
					// setTimeout(function(){
					// 	$('#photo-take').click();
					// }, extendedTimeout);
				}, extendedTimeout);
			}, extendedTimeout);
		}, extendedTimeout);
	};

	me.timer = function(){
		setTimeout(function(){
			$('a.timer').click();
			setTimeout(function(){
				$('#tap').click();
				setTimeout(function(){
					$('#timer-save').click();
					setTimeout(function(){
						$('#timer .right').first().click();
						setTimeout(function(){
							$('#tap').click();
							setTimeout(function(){
								$('#timer-save').click();
								
							}, extendedTimeout);
						}, extendedTimeout);
					}, extendedTimeout);
				}, extendedTimeout);
			}, extendedTimeout);
		}, extendedTimeout);
	};

	me.diary = function(){
		setTimeout(function(){
			$('.diary').click();
			setTimeout(function(){
				$('#diary-content a').first().click();
				setTimeout(function(){
					$('.editGlobal').click();
					$('#diary-content .selected .slide').first().find('.editDetail').click();
				}, extendedTimeout);
			}, extendedTimeout);
		}, extendedTimeout);
	};

	me.maps = function(ref){
		setTimeout(function(){
			$('a.map').click();
			setTimeout(function(){
				$('#mapSearchBox').val('London');
				$('#mapForm').submit();
				setTimeout(function(){
					$('#location2').click();
					setTimeout(function(){
						$('#tabList a').first().click();
					}, extendedTimeout);
				}, extendedTimeout);
			}, extendedTimeout);
		}, extendedTimeout);
	};

	// 
	me.start = function(){
		me.advice();
		me.more();
		me.timer();
		me.diary();
		me.maps();
	}

	//
	me.setComplete = function(){
		
	};
})();