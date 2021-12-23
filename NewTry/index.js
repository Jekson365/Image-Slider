$(document).ready(()=> {
    $(".backgroundcover").on("click",".change1",function() {
        $(this).parents(".contentcontainer").siblings(".mysneakrs").css(
            'background-image', 'url(' + "https://n.nordstrommedia.com/id/sr3/62b97353-a07e-44dc-bb33-dac0e5da9d4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" + ')'
        )
        
    })
    $(".backgroundcover").on("click",".change2",function() {
        $(this).parents(".contentcontainer").siblings(".mysneakrs").css(
            'background-image', 'url(' + "https://n.nordstrommedia.com/id/sr3/ee051ef1-7127-4ec8-8e66-1f72150b81a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" + ')'
        )
        
    })
    $(".backgroundcover").on("click",".change3",function() {
        $(this).parents(".contentcontainer").siblings(".mysneakrs").css(
            'background-image', 'url(' + "https://n.nordstrommedia.com/id/sr3/b1dcc5c1-c450-4f6c-9368-4cf50dc6990b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" + ')'
        )
    })
    $(".backgroundcover").on("click",".change4",function() {
        $(this).parents(".contentcontainer").siblings(".mysneakrs").css(
            'background-image', 'url(' + "https://n.nordstrommedia.com/id/sr3/289de458-1aa2-497e-b8ed-ec3c559bb375.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838" + ')'
        )
    })
})