$(document).ready( function() {
    $("#phone-menu a").on("click", function() {
        $("#content").load("html/"+ $(this).attr("class") + ".html");
    });
});