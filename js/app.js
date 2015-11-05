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
        smoothScrolling: true,
        easing: {
            vibrate: function(p) {
                return Math.sin(p * 10 * Math.PI);
            }
        }
    });