(function() {
    new WOW().init();

    function slide() {
        var slide_index = $('#slide_bd').children().length;
        var slide_width = (24 * slide_index) / 2;
        for (var i = 0; i < slide_index; i++) {
            if (i == 0) {
                $('#slide_hd').append("<li class='on'></li>");
            } else {
                $('#slide_hd').append('<li></li>');
            }
        }
        $('.slide .hd').css({
            "margin-left": -(slide_width)
        });
    }
    slide();
    jQuery(".index_slide").slide({ mainCell: ".bd ul", autoPlay: true, effect: "fold" });
    jQuery(".index_box3_slide").slide({ mainCell: ".bd ul", trigger: "click" });
    jQuery(".index_box4_slide").slide({ mainCell: ".bd ul", trigger: "click" });

    var box6_list_h = $(".index_box6_list").height();
    var basic_h = 260;
    var n = Math.ceil(box6_list_h / basic_h);
    if (n > 1) {
        for (var i = 0; i < n; i++) {
            var a = $('<a href="javascript:;"></a>');
            $(".index_box6_dot").append(a);
        }
        $(".index_box6_dot a").each(function(index, obj) {
            $(this).on('click', function() {
                var top = basic_h * index;
                $(".index_box6_list").css('top', -top);
            });
        })
    }






})();