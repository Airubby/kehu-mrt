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

    var inputI = $(".index_box7_left").find("input");
    $(inputI.get(0)).attr({ "placeholder": "您的姓名" });
    $(inputI.get(1)).attr({ "placeholder": "电话" });
    $(inputI.get(2)).attr({ "placeholder": "QQ/微信/邮箱" });
    $($(".index_box7_left").find("textarea").get(0)).attr({ "placeholder": "设计内容详细补充说明" });

    $(".about_con").hide();
    $(".about_title").on('click', function() {
        $(".about_con").show(500);
    });


    var nav_bar_on = true;
    $(window).scroll(function(event) {
        $("#nav_con").hide(1000);
        nav_bar_on = true;
        $("#nav_bar").css({
            'background-position': '0 0'
        });
        getTop();
    });

    function getTop() {
        var top = $(window).scrollTop();
        if (top > 200) {
            $("#nav").css({
                'display': 'block'
            });
        } else {
            $("#nav").css({
                'display': 'none'
            });
        }
    }
    $("#nav_bar").click(function() {
        if (nav_bar_on) {
            nav_bar_on = false;
            $("#nav_bar").css({
                'background-position': '-68px 0'
            });
        } else {
            nav_bar_on = true;
            $("#nav_bar").css({
                'background-position': '0 0'
            });
        }
        $("#nav_con").toggle(1000);
    });

    var join_job = true;
    $(".join_job").hide();
    $(".join_box_btn").on("click", function() {
        if (join_job) {
            join_job = false;
            $(".join_box_btn img").css({
                'margin-top': '-62px'
            });
            $(".join_job").show(1000);
        } else {
            join_job = true;
            $(".join_box_btn img").css({
                'margin-top': '0'
            });
            $(".join_job").hide(1000);
        }
    });

    $(".join_job a").each(function() {
        $(this).on('click', function() {
            $(".jobs_click_show").show(500);
        });
    });

    $("#jobs_click_close").on('click', function() {
        $(".jobs_click_show").hide(500);
    });




    $(".case_box2_con").each(function() {
        var _this = $(this);
        if (_this.find("li").length != 0) {

            var thisLiNum = Math.ceil(_this.find("li").length / 12);
            var thisNum = 1;

            if (_this.find("li").length > 12) {

                _this.find("li").each(function() {
                    $(this).css("display", "none");
                });
                for (var i = 0; i < 12; i++) {
                    $(_this.find("li")[i]).css("display", "block");
                }

            }


            var firstPath = $(_this.find("li").get(0)).find("img")[0].src;
            _this.find("p").append("<img src=''/>");
            $(_this.find("p").find("img")[0]).attr('src', firstPath);

            _this.find("li").each(function(index, obj) {
                $(obj).on("click", function() {
                    var path = $(obj).find("img")[0].src;
                    $(_this.find("p").find("img")[0]).attr('src', path);
                });
            });

            _this.find(".prevLeft").on("click", function() {
                if (thisNum == 1) {
                    alert("没有更多信息了！");
                    return;
                } else {
                    thisNum--;
                    _this.find("li").each(function() {
                        $(this).css("display", "none");
                    });
                    var firstNum = (thisNum - 1) * 12;
                    var lastNum = thisNum * 12;
                    for (var i = firstNum; i < lastNum; i++) {
                        $(_this.find("li")[i]).css("display", "block");
                    }
                }
            });

            _this.find(".nextRight").on("click", function() {
                if (thisNum == thisLiNum) {
                    alert("没有更多信息了！");
                    return;
                } else {
                    thisNum++;
                    _this.find("li").each(function() {
                        $(this).css("display", "none");
                    });
                    var firstNum = (thisNum - 1) * 12;
                    var lastNum = thisNum * 12;
                    for (var i = firstNum; i < lastNum; i++) {
                        $(_this.find("li")[i]).css("display", "block");
                    }
                }
            });


        } else {
            _this.find(".case_page").css("display", "none");
        }
    });

    jQuery(".slideTxtBox").slide({
        trigger: "click"
    });

    $(".case_box_con").find("li").each(function() {

        $(this).on("click", function() {

            var thisText = $(this).find("span").text();

            $(".case_box_con").find(".case_title h2").text(thisText);

        });
    });





})();