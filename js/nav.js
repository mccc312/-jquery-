/**
 * Created by mc on 2016/12/28.
 */
$(function() {
    $("#nav li").hover(function () {
        $(this).find(".jnNav").show()
    }, function () {
        $(this).find(".jnNav").hide()
    });
    $(".jnCatainfo .promoted").append('<s class="hot"></s>')
})