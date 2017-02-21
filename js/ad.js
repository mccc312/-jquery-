/**
 * Created by mc on 2017/1/3.
 */
$(function(){
    var index = 0;
    var len = $("#jnImageroll div a").length;
    var adtime = null;
    $("#jnImageroll div a").mouseover(function(){
        index =  $("#jnImageroll div a").index(this);
        showImage(index);
    }).eq(0).mouseover();
    ////////
    $('#jnImageroll').hover(function(){
        if (adtime){
            clearInterval(adtime);
        }
    },function(){
        adtime = setInterval(function(){
            showImage(index);
            index++;
            if (index==len){index = 0}
        },5000);
    }).trigger("mouseleave");
    ////////
    function showImage(){
        var $rollobj =   $("#jnImageroll");
        var $rolllist = $rollobj.find("div a");
        var newhref = $rolllist.attr("href");
        $("#JS_imgWrap").attr("href",newhref).find("img").eq(index).stop().fadeIn().siblings().fadeOut();
        $rolllist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1");
    }
})

