/**
 * Created by mc on 2017/1/3.
 */
$(function(){
    $("#jnBrandList").each(function(){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;"class="image,ask"></span>';
        $(spanHtml).appendTo(this)
        location.href('http://www.baidu.com')
        location.assign()
        location.replace()
        var news = document.createElement('span');
        news.appendChild(document.createTextNode('third'));
        var foo = document.getElementById('foo');
        foo.appendChild('news');
    })
})