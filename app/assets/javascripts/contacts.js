// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
    $(".contact-form").on("ajax:success", function() {
        swal("Good job!", "You clicked the button!", "success");
        $(this).slideUp();
        $(this).prev('.form-close').click();
        $('.contact-form input').val('');
        $('.contact-form textarea').val('');
    }); 

    $(".contact-form").on("ajax:error", function(xhr, status, error) {
        sweetAlert("Oops...", "Something went wrong!", "error");
        console.log(error);
    });
});