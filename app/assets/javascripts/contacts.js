// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
    $(".contact-form").on("ajax:success", function() {
        swal({   title: "Thanks!",   text: "We'll be in touch",   imageUrl: "assets/ok-512.png" });
        // sweetAlert("Good job!", "You clicked the button!", "success");
        $(this).slideUp();
        $(this).prev('.form-close').click();
        $('button.confirm').css('background','#8CD4F5');
        $('.contact-form input[name="contact[name]"]').val('');
        $('.contact-form input[name="contact[email]"]').val('');
        $('.contact-form input[name="contact[phone]"]').val('');
        $('.contact-form textarea').val('');
    }); 

    $(".contact-form").on("ajax:error", function(xhr, status, error) {
        sweetAlert("Oops...", "Something went wrong!", "error");
        $('button.confirm').css('background','#ff9b7e');
        console.log(error);
    });
});