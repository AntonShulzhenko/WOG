$(document).ready(function () {
  if ($('body').width() <= 1400 && $('body').width() >= 768) {
    $('footer').addClass('minimize');
    $('header').addClass('minimize');
    $('main').addClass('minimize');
    $('nav').addClass('minimize');
  }

  $(".show_hide").on('click', function () {
    $('footer').toggleClass('minimize');
    $('header').toggleClass('minimize');
    $('main').toggleClass('minimize');
    $('nav').toggleClass('minimize');
    $("[id^='toolt']").addClass('invisible');
  })

  if ($('body').width() <= 767) {
    $('footer').addClass('mobile-size');
    $('header').addClass('mobile-size');
    $('main').addClass('mobile-size');
    $('nav').addClass('mobile-size');
    $(".nav_header").on('click', function () {
      $(this).parent().toggleClass('open-panel');
      $('.open-panel li a').on('click', function () {
        $('nav.mobile-size').removeClass('open-panel');
      });
    });
    setInterval(function () {
      if ($('nav').hasClass('minimize')) {
        $('main').on('click', function () {
          $('nav.mobile-size').removeClass('open-panel');
        });
        $('header').on('click', function () {
          $('nav.mobile-size').removeClass('open-panel');
        });
      }
    });
  }

  setInterval(function () {
    if ($('nav').hasClass('minimize')) {
      $(".menu_hover").parent().removeClass('invisible');
    } else
      $(".menu_hover").parent().addClass('invisible');
    $(".show_hide").on('click', function () {
      $(".menu_hover").parent().addClass('invisible');
    })
  }, 100);


  // New
  $('.selectpicker').selectpicker({
    size: 3
  });

  $('.select-wrap .caret').addClass('ion-chevron-down');

  $('#confirm-modal').on('shown.bs.modal', function (e) {
    setTimeout(function() {
      $('#confirm-modal').modal('hide');
    }, 1000);
  });

  $('#confirm-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var color = button.data('color');
    var modal = $(this);

    modal.find('.modal-content').css('background-color', color);
  });
});
