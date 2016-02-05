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
    });             // -------------------------       printerpage form  -----------------------
    
   
    $('.livefeedhire-button').click(function() {
        $(this).hide();
        $('.livefeed-form-scrollpoint').show();
        $('.livefeed-form-section .contact-form').slideDown(500);
    });
    
    $('.livefeed-form-scrollpoint').click(function() {
        $(this).delay(300).hide(0);
        $('.livefeedhire-button').delay(400).show(0);
        $('.livefeed-form-section .contact-form').slideUp(500);
    });             // -------------------------       livefeedpage form  -----------------------
    
    
        $('.gifhire-button').click(function() {
        $(this).hide();
        $('.gif-form-scrollpoint').show();
        $('.gif-form-section .contact-form').slideDown(500);
    });
    
    $('.gif-form-scrollpoint').click(function() {
        $(this).delay(300).hide(0);
        $('.gifhire-button').delay(400).show(0);
        $('.gif-form-section .contact-form').slideUp(500);
    });             // -------------------------       gifpage form  -----------------------

    
    
    
});