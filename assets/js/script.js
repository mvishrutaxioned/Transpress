$(document).ready(() => {

    // variable declarations
    var topHeight = $('header').height();
    var bannerHeight = $('.banner').height();
    var serHeight = $('.services').height();
    var abHeight = $('.about').height();
    var callCounter = $(document).height() - (topHeight + bannerHeight + serHeight + abHeight);

})