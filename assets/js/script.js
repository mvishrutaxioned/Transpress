$(document).ready(() => {

    // variable declarations
    var topHeight = $('header').height();
    var bannerHeight = $('.banner').height();
    var serHeight = $('.services').height();
    var abHeight = $('.about').height();
    var callCounter = $(document).height() - (topHeight + bannerHeight + serHeight + abHeight);

    // counter functionality
    function counter() {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
          
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 2800,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
        });
    }

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

    // close video function
    function closeVid(e) {
        e.preventDefault()
        $('.video').addClass('none')
        $('video').get(0).currentTime = 0;
        $('html, body').removeClass('hidden')
    }

    // display video funcitionality
    $('.about figure').click(e => {
        e.preventDefault()

        $('.video').removeClass('none');
        $('.video').trigger('play');
        $('html, body').addClass('hidden')
    })

    // close video on click
    $('#closeVid').click(e => { closeVid(e) })

    // close video on clicking outside
    if($('.video').hasClass('none') == true) {
        $('main').mouseup(e => {
            var vid = $('video');
            if(!vid.is(e.target) && vid.has(e.target).length === 0) {
                closeVid(e)
            }
        })
    }

    // on scroll call counter
    $(document).scroll(function() {
        if($(document).scrollTop() >= callCounter) {
            counter();
        }
    })

    // accordion functionality
    var num = 0;
    $('.special h3').each(function(i, acc) {
        $(this).click(e => {
            var elem = $(this).parent().find('div');

            if(num == i) {
                elem.slideToggle();
            } else if (num != i) {
                $(`.special li:eq(${num}) div`).slideUp();
                elem.slideDown();
            }

            num = i;
        })
    })

})