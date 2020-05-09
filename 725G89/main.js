$( document ).ready(function() {
    console.log( "ready!" );

    let pages = ["page0", "ar1page", "ar2page", "ar3page"];

    hideAndScroll();
    $("#page0").show();

    function hideAndScroll()
    {
        pages.forEach(element => {
            $("#" + element).hide();
        });
        $(window).scrollTop();
    }

    $("#title").click(function() 
    {
        hideAndScroll();
        $("#page0").show();
        console.log( "byter!" );
    });

    $(".nicebut").click(function() 
    {
        hideAndScroll();
        $("#" + $(this).attr("id") + "page").show();
        console.log( "byter!" );
    });

    $(window).scroll(function() 
    {
        if ($(this).scrollTop() > 1) {
            $("#header").addClass(".stickyPart");
        } else {
            $("#header").remove(".stickyPart");
        }
    });

});







