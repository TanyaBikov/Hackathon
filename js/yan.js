$(document).ready( function() {


	$(".iphone-container").on("click", ".nav", function() {
		if ($(this).hasClass( "animate" )) {
			$(".phone-screen").addClass('loading');
			setTimeout(function(){
			$('.phone-screen').removeClass('loading');
		},1000);
		}
		
		$("#content").load("html/"+ $(this).attr("data-nav") + ".html");
		
	});

	setTimeout(function(){
			$(".loader").fadeOut();
		},500);

	

	$("#content").load("html/authentification.html");





});