

$(document).ready(function() {
    $('.partner-area').click(function() {
        $(this).next('.partner-offices').slideToggle(500);
    });
    
    
    $('.toys-link').click(function() {
        $('html, body').scrollTo('.for-rel',{duration:'1000', offsetTop : '0'});
    });
    
    $('.pastevents-link').click(function() {
        $('html, body').scrollTo('.past-events-image-section'), 500;
    });
    
    $('.contact-link').click(function() {
        $('html, body').scrollTo('.main-australia-section');
    });
    
    $('.partners-link').click(function() {
        $('html, body').scrollTo('.partners-callout-section');
    });
    
});







// partner-area

// partner-offices