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

  // last flex element
  function createLastItem(container) {
    var item = $('.gas-stations__item');
    var el = $('<div class="gas-stations__item gas-stations__item_hidden"></div>');
    if($(window).width() > 1024) {
      if (item.length % 3 != 0) {
        container.append(el);
      }
    }
  }
  createLastItem($('.gas-stations'));

  function searchSidebarToggle() {
    var searchSidebar = $('.search-sidebar'),
        searchSidebarWidth = searchSidebar.width(),
        searchItem = searchSidebar.find('.gas-stations__item_search'),
        clickMapBtn = searchItem.find('.gas-station__show-map'),
        showSidebarBtn = $('.show-sidebar'),
        windowWidth = $(window).width(),
        mapContainer = $('.map-container');

    if ( windowWidth <= 768 ) {

      clickMapBtn.on('click', function() {
        searchSidebar.animate({'left': '-100%'});
        mapContainer.css('width', '100%');
      });

      showSidebarBtn.on('click', function() {
        searchSidebar.animate({'left': ''});
        mapContainer.css('width', '');
      });

    }
  }
  searchSidebarToggle();

  // selecting td
  function selected() {
    var td = $('.period-table td:not(td.first-td)');
    var isDragging = false;
    var isSelected = false;

    td.mousedown(function(e) {
      $(e.target).toggleClass('sel');
      $(window).mousemove(function(evt) {
        isDragging = true;
        if ($(evt.target).hasClass('sel')) {
          isSelected = false;
          $(evt.target).addClass('sel');
        } else {
          isSelected = true;
          $(evt.target).removeClass('sel');
        }
        $(window).unbind("mousemove");
      });
    }).mouseup(function() {
      var wasDragging = isDragging;
      isDragging = false;
      $(window).unbind("mousemove");
    }).mouseover(function(e) {
      if (isDragging) {
        if (isSelected) {
          $(this).removeClass('sel');
        } else {
          $(this).addClass('sel');
        }
      }
    });
  }

  selected();

  // fuel-types toggler
  function toggleFuelTypes() {
    var fuelTypes = $('body').find('div.fuel-types'),
        btn = fuelTypes.find('a.fuel-types__toggler'),
        fuelWrap = fuelTypes.find('div.fuel-types__wrap');

    btn.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      fuelWrap.toggle();
    });
  }

  toggleFuelTypes();

  function searchSidebarBodyHeight() {
    var h = $('.search-sidebar__header').height(),
        f = $('.search-sidebar__footer').height(),
        side = $('.search-sidebar').height(),
        b = $('.search-sidebar__body');

    b.height(side - (h + f) - 10);
  }

  searchSidebarBodyHeight();

  // FAQ
  function faqAccordion() {
    var faq = $('body').find('div.faq');
    var button = faq.find('button.faq-button');

    button.each(function(i) {
      button.eq(i).on('click', function() {

        if($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).siblings().slideUp(300);
        } else {
          $(this).addClass('active');
          $(this).siblings().slideDown(300);
          $(this).parent().siblings().children('button.faq-button').removeClass('active');
          $(this).parent().siblings().children('div.faq-panel').slideUp(300);
        }

      });
    });
  }

  faqAccordion();

  function cutInfo() {
    var info = $('.fuel-transfer__info span');

    info.each(function(i) {
      var base = $(this).text();
      if($(this).text().length > 15) {
        var excerpt = $(this).text().slice(0, 15) + '...';
        $(this).text(excerpt);
      }

      $(this).hover(function() {$(this).text(base);}, function() {$(this).text(excerpt);});
    });
  }

  cutInfo();
});

// Google map
// var map, places, infoWindow, autocomplete;
//
// function initMap() {
//   // Обьект с координатами
//   var myLatLng = {
//     azs1: {lat: 50.487567, lng: 30.522837},
//     azs2: {lat: 46.853902, lng: 35.363836},
//     azs3: {lat: 49.01, lng: 31.28}
//   };
//
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 6,
//     center: {lat: 49.01, lng: 31.28}
//   });
//
//   var input = /** @type {!HTMLInputElement} */ (document.getElementById('new-input'));
//
//   // Create the autocomplete object and associate it with the UI input control.
//   // Restrict the search to the default country, and to place type "cities".
//   autocomplete = new google.maps.places.Autocomplete(
//     input,
//     {
//       types: ['(cities)']
//     });
//
//   places = new google.maps.places.PlacesService(map);
//
//   autocomplete.addListener('place_changed', onPlaceChanged);
//
//   infowindow = new google.maps.InfoWindow({
//     content: document.getElementById('info-window')
//     // content: document.getElementById('info-table')
//     // maxWidth: 300
//   });
//
//   var img = 'img/map-ico.png';
//
//   var marker = new google.maps.Marker({
//     icon: img
//   });
//
//   marker.setMap(map);
//
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
//
//   google.maps.event.addListener(infowindow, 'domready', function() {
//     var ov = $('.gm-style .gm-style-iw');
//     ov.siblings().css('display', 'none');
//     ov.children().css('min-width', '279px');
//   });
//
//   function onPlaceChanged() {
//     infowindow.close();
//     marker.setVisible(false);
//     var place = autocomplete.getPlace();
//     if (place.geometry) {
//       map.panTo(place.geometry.location);
//       map.setZoom(12);
//     } else {
//       document.getElementById('new-input').placeholder = 'Введіть місцезнаходження';
//     }
//     marker.setPosition(place.geometry.location);
//     marker.setVisible(true);
//     infowindow.open(map, marker);
//   }
// }
