$(document).ready(function() {
    $('.printerhire-button').click(function() {
        $(this).hide();
        $('.printerhire-form-scrollpoint').show();
        $('.printer-form-section .contact-form').slideDown(500);
        

    });
    
    $('.printerhire-form-scrollpoint').click(function() {
        $(this).delay(300).hide(0);
        $('.printerhire-button').delay(400).show(0);
        $('.printer-form-section .contact-form').slideUp(500);
    });
});