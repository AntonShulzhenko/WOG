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
});


// Google map
function initMap() {
  var myLatLng = {
    azs1: {lat: 50.487567, lng: 30.522837},
    azs2: {lat: 46.853902, lng: 35.363836}
  };

  var img = 'img/map-ico.png';

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng.azs2,
    zoom: 10
  });

  var marker = new google.maps.Marker({
    position: myLatLng.azs2,
    icon: img
  });

  marker.setMap(map);

  var contentString = '<div class="info-window">'+
  '<div class="info-window__header">'+
  '<p>ВІННИЦЬКА ФІЛІЯ АЗС"КОМСОМОЛЬСЬКЕ"</p>'+
  '</div>'+
  '<div class="info-window__body">'+
  '<p>Доступні продукти</p>'+
  '<div class="info-window__prod">'+
  '<img src="img/fuel-types/92mustang.png" alt="" class="prod-type img-responsive">'+
  '<img src="img/fuel-types/95mustang.png" alt="" class="prod-type img-responsive">'+
  '<img src="img/fuel-types/100mustang.png" alt="" class="prod-type img-responsive">'+
  '<img src="img/fuel-types/DPmustang.png" alt="" class="prod-type img-responsive">'+
  '<img src="img/fuel-types/DPmustang+.png" alt="" class="prod-type img-responsive">'+
  '<img src="img/fuel-types/LGPmustang.png" alt="" class="prod-type img-responsive">'+
  '</div>'+
  '</div>'+
  '</div>';

  var contentTable = '<div class="info-window info-window_table">'+
    '<div class="gm-table-wrap">'+
    '<table>'+
    '<thead>'+
    '<tr>'+
    '<td>Дата транзакції</td>'+
    '<td>Карта / Держатель</td>'+
    '<td>Тип транзакції</td>'+
    '<td>Чек</td>'+
    '<td>АЗК</td>'+
    '<td class="w150">Ресурс</td>'+
    '<td>Об\'єм</td>'+
    '<td>Сума</td>'+
    '</tr>'+
    '</thead>'+
    '<tbody>'+
    '<tr>'+
    '<td class="no-wrap"><span class="date">10/11/2015</span><span class="time">12:00</span></td>'+
    '<td>7825990000000050<span class="name">Іванський П.П.</span></td>'+
    '<td>Оплата пального</td>'+
    '<td class="no-wrap">125449879322 <i class="ion-navicon-round"></i></td>'+
    '<td>Волинська філія «Київський Майдан»</td>'+
    '<td><img src="img/fuel-types/95mustang.png" alt="" class="img-responsive"></td>'+
    '<td>50л</td>'+
    '<td class="no-wrap">1 000 000 грн</td>'+
    '</tr>'+
    '</tbody>'+
    '</table>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentTable
    // maxWidth: 300
  });

  infowindow.open(map, marker);

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addListener(infowindow, 'domready', function() {
    var ov = $('.gm-style .gm-style-iw');
    ov.siblings().css('display', 'none');
    ov.children().css('min-width', '279px');
  });
}
