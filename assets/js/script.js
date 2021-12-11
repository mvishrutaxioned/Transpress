$(document).ready(() => {

    // variable declarations
    var topHeight = $('header').height();
    var bannerHeight = $('.banner').height();
    var serHeight = $('.services').height();
    var abHeight = $('.about').height();
    var callCounter = $(document).height() - (topHeight + bannerHeight + serHeight + abHeight);



    // responsive navbar functionality
    $('#menu').click(e => {
        e.preventDefault();
        var docScroll = $(document).scrollTop();

        $('.navbar').css({"top":`${topHeight - docScroll}px`});
        $('.navbar').toggleClass('showNav');
        $('html, body').toggleClass('hidden');
    })

    // hide and show toggle btn functioanality
    $(window).scroll(function() {
        if ($(this).scrollTop() > topHeight) {
            $('#toggleBtn').fadeIn();
            $('#toggleBtn').addClass('flex');
        } else {
            $('#toggleBtn').fadeOut();
            $('#toggleBtn').removeClass('flex');
        }
    });

    // on toggleBtn click functionality
    $('#toggleBtn').click(e => {
        e.preventDefault();
        window.scroll({top: 0, behavior: "smooth"});
    })


})