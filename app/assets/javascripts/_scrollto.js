

$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
    
        var target = $(this);
    
        if( target.length ) {
            event.preventDefault();
            
            console.log(target);
            $('html, body').scrollTo( $( $(target).attr('href') ) );
            // $('html, body').scrollTo($("target.href"));
            // $('html, body').scrollTo(target, 1000)
        }
    });
});

