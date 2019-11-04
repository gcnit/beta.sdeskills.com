$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
	   $("#contactForm").on('submit', function(e){
	   		e.preventDefault();
       $("button#contactSubmit").html("Wait..").attr("disabled", "disabled");	   		
        var b = $.ajax({
                url: "/scripts/signup.php",
                type: "post",
                data: $("#contactForm").serialize(),
                success: function(d) {
                    $("button#contactSubmit").html("Subscribed...").attr("disabled", "disabled")
                },
                error: function(d) {
                    $("button#contactSubmit").html("Failed...").attr("disabled", "disabled");
                    setTimeout(function() {
                        $("button#contactSubmit").html("Subscribe").prop("disabled", false)
                    }, 2000)
                }
            })
    
	   	})
 });