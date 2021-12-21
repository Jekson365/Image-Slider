$(document).ready(()=> {
    $(".container").on("mouseover","img",function(){
        $(this).parent(".imagecontai").animate({height:"450px"}, 50)
    })
    $(".container").on("mouseleave",".imagecontai",function(){
       $(this).animate({height:"262px"}, 50, 'linear')
    })
     
    
    
     
})