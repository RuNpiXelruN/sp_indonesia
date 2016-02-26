// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
    $(".contact-form").on("ajax:success", function() {
        swal({   title: "Sweet!",   text: "Here's a custom image.",   imageUrl: "assets/Social_Playground_logo_Circle-compressor.png" });
        // sweetAlert("Good job!", "You clicked the button!", "success");
        $(this).slideUp();
        $(this).prev('.form-close').click();
        $('button.confirm').css('background-color','rgb(140, 212, 245) !important');
        $('.contact-form input').val('');
        $('.contact-form textarea').val('');
    }); 

    $(".contact-form").on("ajax:error", function(xhr, status, error) {
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('button.confirm').css('background-color','#ff9b7e');
        console.log(error);
    });
});