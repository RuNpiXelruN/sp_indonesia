
// $(document).ready(function(){
$(document).on('ready', function() {
    $(".nav-item").click(function(){
        $(".nav-content").slideToggle(500);
    });
  
    // makes dropdown slide up once link is clicked
    $('.ddlink').on('click', function() {
        $(".nav-content").slideUp("fast");
    });
});


// makes dropdown slide up if user clicks anything but a link
$(document).on('click', function (e) {
    e.stopPropagation();
    var container = $(".nav-item");

    if (container.has(e.target).length === 0) {
        $('.nav-content').slideUp('fast');
    }
});


    // $(document).click(function(event){
//   $(document).on('change', function(event) {
//         var $trigger = $(".nav-item");
//         if($trigger !== event.target && !$trigger.has(event.target).length){
//             $(".nav-content").slideUp("fast");
//                 $(this).children().click(function(e) {
//                     return false;
//                 });
//         }
        
        
//     });






//   $('.nav-item').on('click',function(){

//     var contentHeight = $(".nav-content").css('max-height');
        
//         if (parseInt(contentHeight.split('px')[0]) <2) {
//              $(".nav-content").animate({ "max-height": "146vw"}, 450,  function(){
//                  $(this).css('max-height',"146vw");
//             });
//         }
//         else {
//             $(".nav-content").animate({ "max-height": "0vw"}, 450, function(){
//                  $(this).css('max-height',"0vw");
//             });
            
//         };

//   });
