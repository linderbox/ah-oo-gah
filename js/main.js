// $('html,body').animate({
//     scrollTop: window.scrollY + window.innerHeight
// }, 1000);

// var $root = $('html, body');
// $('a').click(function() {
//     var href = $.attr(this, 'href');
//     $root.animate({
//         scrollTop: $(href).offset().top
//     }, 500, function () {
//         window.location.hash = href;
//     });
//     return false;
// });

// $(document).ready(function () {

// 	var words = ["warnings", "compliments", "love notes", "complaints"]
// 	// for (var index=0; index < words.length; index++) {
// 	var index = 0;

// 	setInterval(function() {
// 		$('.rotating-text').removeClass('animated slideInUp');
// 		$('.rotating-text').text(words[index]).addClass('animated slideInUp');
// 		index = index+1;
// 	},1000);
	

// }); // end onready function


// $(document).ready(function () {
// 	var words = ["comments", "complaints", "warnings", "compliments", "love notes"]
// 	for (var index=0; index < words.length; index++) {
// 		$('.rotating-text').text(words[index]).addClass('animated slideInUp');
// 	};
// });

$(document).ready(function () {

	var words = ["warnings, ", "compliments, ", "love notes, ", "complaints, "]
	// for (var index=0; index < words.length; index++) {
	var index = 0;

	setInterval(function() {
		$('.rotating-text').removeClass('animated rubberBand infinite');
		$('.rotating-text').text(words[index]).addClass('animated rubberBand infinite');
		index = (index+1);
		if (index > 3) {
			index = 0;
		}
	},1000);
	

}); // end onready function