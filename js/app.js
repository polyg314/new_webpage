// For a full explanation of this code, please refer to the blogpost at http://www.bram.us/2014/01/01/skrollr-css-animations-linked-to-scroll-position/

// setSkrollr function extracted from https://www.pingdom.com/2013/
// var setSkrollr = function($el, data) {
//     for (var i = 0, l = data.length; i < l; i++) {
//         var d = data[i],
//             px = d[0];
//             css = d[1];
//         $el.attr('data-' + px, css);
//     }
// }

// jQuery(function($) {
//     setSkrollr($('#goldengate'), [[0, 'opacity:1.0'], [2000, 'opacity:0.0']]);
//     setSkrollr($('#fog'), [[0, 'transform:translateX(-100%);'], [750, 'transform:translateX(0%);']]);
//     skrollr.init({
//         smoothScrolling: false
//     });
// });

// var windowHeight = $(window).height();
// $(".slide").each(function(){
//     var slideHeight = windowHeight * $(this).data("num-elements");
//     $(this).height(slideHeight);
// });



skrollr.init({
        forceHeight: false,
});



	var	flies = $(".fireFlies");

	function glowFlies(){
		console.log('hi')
		for (var i = 1; i <= flies.length; i++){
			var interval = 500 + Math.round(Math.random() * 1000);
			var fly = $('#fireFly' + i)
			// setTimeout(function(){
		    	fly.hasClass('glow') ? fly.removeClass('glow') : fly.addClass('glow');
			// }, interval);
		}
	}

	function onInterval(){
			setInterval(function(){	
				glowFlies()
			},3000)
	}

	onInterval();



	function makeNewPosition(){    
	    // Get viewport dimensions (remove the dimension of the div)
	    var h = $(window).height() - 50;
	    var w = $(window).width() - 50;
	    
	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);
	    
	    return [nh,nw];    	    
	}

	function animateDivs(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly1').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly1').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs();        
	    });	    
	};

	function animateDivs2(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly2').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly2').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs2();        
	    });	    
	};

	function animateDivs3(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly3').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly3').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs3();        
	    });	    
	};

	function animateDivs4(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly4').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly4').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs4();        
	    });	    
	};

	function animateDivs5(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly5').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly5').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs5();        
	    });	    
	};

	function animateDivs6(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly6').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly6').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs6();        
	    });	    
	};

	function animateDivs7(){
	    var newq = makeNewPosition();
	    var oldq = $('#fireFly7').offset();
	    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
	    $('#fireFly7').animate({ top: newq[0], left: newq[1] }, speed, function(){
	      animateDivs7();        
	    });	    
	};

	function calcSpeed(prev, next) {
	    
	    var x = Math.abs(prev[1] - next[1]);
	    var y = Math.abs(prev[0] - next[0]);
	    
	    var greatest = x > y ? x : y;
	    
	    var speedModifier = 0.5;

	    var speed = Math.ceil(greatest/speedModifier);

	    return speed;

}

	    animateDivs();
	    animateDivs2();
	    animateDivs3();
	    animateDivs4();
	    animateDivs5();
	    animateDivs6();
	    animateDivs7();



