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

})