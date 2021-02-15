$(document).ready(function(){
    $(".talk-btn").on("mouseenter",function(){
        $("#animate").stop();
        var x=$(".talk-btn").offset().top;
        $("#animate").animate({top:x,width:"150px",height:"150px",borderRadius:"100%"},"slow");
        $(".container").css({transition:"color 1s ease-in-out",color:"black"});
        $(".talk-btn").css("color","white");

    })
    $(".talk-btn").on("mouseleave",function(){
        $("#animate").stop();
        $("#animate").animate({top:"0px",width:"100%",height:"100%",borderRadius:"0px"},"slow");
        $(".container").css({transition:"color 1s ease-in-out",color:"white"});

    })
})