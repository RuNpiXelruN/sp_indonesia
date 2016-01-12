// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require_tree .



$(document).ready(function() {
    
    $(".partner-button").click(function(){
        $(this).hide();
        $('.contact-form').css({'height':'40vw', 'margin': '10vw 9.5vw 10vw'});
        $('.contact-form').fadeIn(300);
        $('.form-content').delay().fadeIn(300);

        $('html, body').scrollTo('.scroll-here',{duration:'1000', offsetTop : '0'});
    });
    
    $('.scroll-here').click(function() {
        $(this).hide();
        $('.partner-button').show();
        $('.contact-form').css({'height': '0vw', 'margin': '0'});
        $('.contact-form').fadeOut(300);
        $('.form-content').delay().fadeOut(300);
        
        $('html, body').scrollTo('.partners-callout-section', {duration: '500', offsetTop: '10'});
    });
    
});

//  GREAT FOR USE WITH MEDIA QUERIES!! 

// $(document).ready(function() {
//     // run test on initial page load
//     checkSize();

//     // run test on resize of the window
//     $(window).resize(checkSize);
// });

// //Function to the css rule
// function checkSize(){
//     if ($(".sampleClass").css("float") == "none" ){
//         // your code here
//     }
// }





// $('html, body').animate({
//     scrollTop: $(window).scrollTop() + 200
// });






































$(document).ready(function(){
    
    // var hidden = true;
    // document.getElementById('nav-item').onclick = function() {
    //     document.getElementById('nav-content').style.height = '140vw';
    //     hidden = !hidden;
    // };    
    
  $('.parallax').parallax();
  
  
});

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

var options = [
    {selector: '.staggered-test', offset: 400, callback: 'Materialize.showStaggeredList(".staggered-test")' }
  ];
  Materialize.scrollFire(options);
  
var options = [
    {selector: '.staggered-test-small', offset: 400, callback: 'Materialize.showStaggeredList(".staggered-test-small")' }
  ];
  Materialize.scrollFire(options);
  


