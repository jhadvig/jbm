$(window).load(function() {
	// if (window.location.pathname == '/') {
	// 	setTimeout(function () {
	// 		$("#loader").fadeOut("slow");
	// 	}, 5000);
	// } else {
	// 	$("#loader").hide();
	// }
});

$(document).ready(function() {

	// if (window.location.pathname == '/') {
	// 	setTimeout(function () {
	// 		$("#loader").fadeOut("slow");
	// 	}, 5000);
	// } else {
	// 	$("#loader").hide();
	// }

    var offset = 250;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
 
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

});