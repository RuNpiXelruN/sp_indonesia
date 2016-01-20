
$(document).ready(function(){

    $(".nav-item").click(function(){
        $(".nav-content").slideToggle(500);
    });
  
    $(document).click(function(event){
        var $trigger = $(".nav-item");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".nav-content").slideUp("fast");
                $(".nav-content").children().click(function(e) {
                    return false;
                });
        }            
    });
});


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
