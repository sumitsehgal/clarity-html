var prevScrollpos = $(window).scrollTop();

$(function() {
    navScroll();
    scrollId();
    supportAcc();
    productImgHgt();
    $(".owl-carousel").owlCarousel({
        items: 4,
        dots: false,
        margin: 15,
        nav: true,
        navText: ["<img class='prev' src='images/blue-arrow.png'>", "<img class='next' src='images/blue-arrow.png'>"]
    });
});

$(window).resize(function() {
    productImgHgt();
})

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
    // console.log('pagePosition previous - ' + prevScrollpos);
    // console.log('pagePosition now - ' + currentScrollPos);
    // console.log('header hight ' + eleHead.height());
    if (currentScrollPos > eleHead.height()) {
        // $('body').css('padding-top', eleHead.height());
        eleHead.find('.top').hide();
        eleHead.addClass('fix');
        if (eleHead.hasClass('fix') && prevScrollpos > currentScrollPos) {
            eleHead.css('top', '0');
            eleHead.addClass('trans');
        } else {
            eleHead.css('top', '-90px');
            setTimeout(function() {
                eleHead.removeClass('trans');
            }, 300);
        }
        prevScrollpos = currentScrollPos;
    } else {
        eleHead.find('.top').removeAttr('style');
        eleHead.removeClass('fix');
        $('body').removeAttr('style');
    }
}

function supportAcc() {
    if ($('.steps').length > 0) {
        $('.ques h3').click(function() {
            $(this).parents('.box').toggleClass('show').find('.ans').slideToggle();
        })
    }
}

function productImgHgt() {
    if ($('.products').length > 0)
        $('.products .product-box .img').css('height', $('.products .product-box').width());
}