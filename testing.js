window.testing = new (function(){

	var me = this;
	var shortTimeout = 2000; // 2 seconds
	var defaultTimeout = 4000; // 4 seconds
	var extendedTimeout = 8000; // 8 seconds

	me.advice = function(){
		setTimeout(function(){
			$('a.advice').click();
			setTimeout(function(){
				$('.adviceList a.ui-link').first().click();
				setTimeout(function(){
					//$('#adviceDetailPainful .adviceDetailContent a').click();
					me.next();
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};

	me.moreScreen = function(){
		setTimeout(function(){
			$("footer a[href='#more']").click();
			setTimeout(function(){
				$('.moreList a').first().click();
				setTimeout(function(){
					$('#profile-name').val('Testing');
					$('#profile-submit').click();
					//$('.cameraContent .camera').click();
					// setTimeout(function(){
					// 	$('#photo-take').click();
					// }, extendedTimeout);
					me.next();
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
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
								me.next();
							}, defaultTimeout);
						}, defaultTimeout);
					}, defaultTimeout);
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};

	me.diary = function(){
		setTimeout(function(){
			$('.diary').click();
			setTimeout(function(){
				$('#diary-content a').first().click();
				setTimeout(function(){
					$('.editGlobal').click();
					$('#diary-content .selected .slide').first().find('.editDetail').click();
					me.next();
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};

	me.maps = function(){
		setTimeout(function(){
			$('a.map').click();
			setTimeout(function(){
				$('#mapSearchBox').val('London');
				$('#mapForm').submit();
				setTimeout(function(){
					$('#location2').click();
					setTimeout(function(){
						$('#tabList a').first().click();
						setTimeout(function(){
							$('#mapDirectionsLink').click();
						}, defaultTimeout);
					}, defaultTimeout);
				}, defaultTimeout);
			}, defaultTimeout);
		}, defaultTimeout);
	};

	// 
	me.start = function(){
		me.next();
	}

	me.index = 0;
	me.queue = [
		me.advice,
		me.moreScreen,
		me.timer,
		me.diary,
		me.maps
	];

	me.next = function(){
		if(me.index < me.queue.length){
			var method = me.queue[me.index];
			me.index++;
			method();
		}
	}

	//
	me.setComplete = function(){
		
	};
})();