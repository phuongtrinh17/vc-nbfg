// JavaScript Document
	var typed = new Typed('.element', {
strings: [".", "Designer vip pro.","Apps Designer.","Film Maker.","Code Developer."],
typeSpeed:20,
backSpeed:20,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
