// Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }



  $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})


$(document).ready(() => {
    $('#b1').click(() => {
        $('#pText').html("Omi Digital is a company of experts of varied backgrounds, in technology, product design and business startegy. we've come togetther to help ambitious businesses differentaite and compete - to become digital businesses. Omni Digital is a company of experts of varied backgrounds, in technology, product design and business starategy we've come togetherto help ambitious business differentiate and compete - become digital businesses.")
            ;
    })
        $('#b2').click(() => {
            $('#pText').html("With a deep understanding of traditional princples,expertise in digital methidology, and an empahsis on human-centered design. OmniDigital takes a fully-integrared approcj to aptimizing the marketing effort of our clients to drive real results.<br><br>And it all started with a comment:'Oh, that's creative!'")
                ;
        })
    $('#b3').click(() => {
            $('#pText').html(" We are a small team of dedicated marketing experts who build on the strength of one another to create a multi-faceted marketing resource for our clients . Each person at OniDigital brings a unique persepective, skill,setand talent to the client we work with and the work we create.")
;    })
})
