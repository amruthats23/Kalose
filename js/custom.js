// ______________ shrinks header
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $("#navbar").css({ padding: "10px 0px", 'box-shadow': 'rgba(32, 33, 36, 0.08) 0px 1px 6px 0px' });
    } else {
        $("#navbar").css({ padding: "15px 0px", 'box-shadow': 'none' });
    }
}

//back to top
var btn = $('#button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//text animation
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 300;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 150 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};
window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


var current = location.href;
$('.navbar li a').each(function () {
    var $this = $(this);
    if ($this.attr('href') == current) {
        $this.addClass('navActives');
    }
})
var current = location.href;
$('.tabs-menu a').each(function () {
    var $this = $(this);
    if ($this.attr('href') == current) {
        $this.addClass('tabsActives');
        var parentMenu = $this.parent().data('parent');
        $('.navbar li a').each(function () {
            var $this = $(this);
            if ($this.attr('href') == parentMenu) {
                $this.addClass('navActives');
            }
        })
    }
})





//--------------------- INITIALIZE TAB SLIDER CSS------------------------------------------
var actWidth = $(".nav-tab-with-slider .nav-tabs").find(".active").parent("li").width();
if (actWidth) {
    var actPosition = $(".nav-tab-with-slider .nav-tabs .active").position();
    $(".nav-tab-with-slider .slider").css({ "left": + actPosition.left, "width": actWidth });
}


//--------------------- MAIN TAB CSS ------------------------------------------
$(".nav-tab-with-slider .nav-tabs a").click(function () {
    $this = $(this);
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $this.parent().parent().find('.sub-nav-item .active').removeClass('active');
    // $(this).children('.sub-nav-item').find('.active').removeClass('active');
    $(this).closest('ul').find('.slider').css({ "left": + position.left, "width": width });
});

//--------------------- SUB TAB CSS ------------------------------------------
$(".nav-tab-with-slider .nav-tabs .sub-nav-item a").click(function () {
    $this = $(this);
    var position = $(this).parent().parent().parent().parent().position();
    var width = $(this).parent().parent().parent().parent().width();
    $(this).closest('.nav-tab-with-slider').find('.active').removeClass('active');
    $(this).parent().parent().parent().parent().find('span').addClass('active');
    $(this).closest('.nav-tab-with-slider').first('ul').find('.slider').css({ "left": + position.left, "width": width });
});

$(document).ready(function () {
    $(".more-view-load").find(".content").slice(0, 8).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(this).siblings().children(".content:hidden").slice(0, 8).slideDown();
        if ($(this).siblings().children(".content:hidden").length == 0) {
            $("#loadMore").text("No More").addClass("noContent");
        }
    });

    $(".more-view-read").find(".content").slice(0, 8).show();
    $("#readMore").on("click", function (e) {
        e.preventDefault();
        console.log($(this).siblings().children(".content:hidden"));
        $(this).siblings().children(".content:hidden").slice(0, 8).slideDown();
        if ($(this).siblings().children(".content:hidden").length == 0) {
            $("#readMore").text("No More").addClass("noContent");
        }
    });
})
$('.bnr-up-ico').click(function() {
    $('.bnr-up-div').slideDown();
});
$('.bnr-up-ico').click(function() {
    $('.bnr-up-ico').hide();
});
$('.close-ico').click(function() {
    $('.bnr-up-div').hide();
});
$('.close-ico').click(function() {
    $('.bnr-up-ico').show();
});





