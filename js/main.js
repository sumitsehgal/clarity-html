var prevScrollpos = $(window).scrollTop();

$(function() {
    navScroll();
    scrollId();
    $(".owl-carousel").owlCarousel({
        items: 4,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<img class='prev' src='images/blue-arrow.png'>", "<img class='next' src='images/blue-arrow.png'>"]
    });
});

$(window).scroll(function() {
    navScroll();
});

function scrollId() {
    $(".cta a").click(function() {
        $('html, body').animate({
            scrollTop: $("#get-touch").offset().top
        }, 800);
    });
}

function navScroll() {
    var currentScrollPos = $(window).scrollTop(),
        eleHead = $('#navbar');
    console.log('pagePosition previous - ' + prevScrollpos);
    console.log('pagePosition now - ' + currentScrollPos);
    if (currentScrollPos > eleHead.height()) {
        eleHead.find('.top').hide();
        eleHead.addClass('fix');
        $('body').css('padding-top', eleHead.height());
        if (eleHead.hasClass('fix') && prevScrollpos > currentScrollPos) {
            eleHead.css('top', '0');
        } else {
            eleHead.css('top', '-90px');
        }
        prevScrollpos = currentScrollPos;
    } else {
        eleHead.find('.top').removeAttr('style');
        eleHead.removeClass('fix');
        $('body').removeAttr('style');
    }
}