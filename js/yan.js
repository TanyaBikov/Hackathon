$(document).ready( function() {
    

    	$(".iphone-container").on("click", ".nav", function() {
        $("#content").load("html/"+ $(this).attr("data-nav") + ".html");
    });

    	 $("#content").load("html/authentification.html");



});