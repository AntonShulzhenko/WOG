wogApp.controller('sustemOppCtrl', sustemOppCtrl);

function sustemOppCtrl($rootScope, $scope) {

  $rootScope.title = '/ Можливості системи';
  $rootScope.page_img = 'settings';

  angular.element($('.nav_list li')).removeClass('active');

  setTimeout(function () {
    angular.element($('.slider_sustem_opp')).find('.inset1').addClass('active_inset');
    angular.element($('.slider_sustem_opp')).find('.block-inset1').addClass('show-slide');
  })

  $scope.slider_header = [
    {
      name: 'Контролюйте витрати всіх підрозділів',
      content: {
        header: 'Заголовок 1',
        main: 'О чем тут будет'
      }

    },
    {
      name: 'Зручне управління  картками та рахунками',
      content: {
        header: 'Заголовок 2',
        main: 'О чем зоголовок 2'
      }
    },
    {
      name: 'Оптимізація використання  рахунків та планування',
      content: {
        header: 'Заголовок 3',
        main: 'О чем зоголовок 3'
      }
    },
    {
      name: 'Оптимізація використання  рахунків та планування',
      content: {
        header: 'Заголовок 4',
        main: 'О чем зоголовок 4'
      }
    }
  ]


  $scope.pickInset = function ($event) {

    var el = angular.element($event.target)
    if (el.is('span')) {
      el = el.parent()
    }
    if (el.is('i')) {
      el = el.closest('li')
    }
    el.addClass('active_inset');
    el.siblings().removeClass('active_inset');
    var insetNumb = (el.attr('data-index'));
    var insetBlock = ($('.slide_content'))
    $('.slide_content').removeClass('show-slide');
    $('.slide_content').each(function () {
      if ($(this).attr('data-block-index') == insetNumb) {
        $(this).addClass('show-slide');
      }
    });
  }

  $scope.slide = function ($event) {

    var firstEl = $('.slider_sustem_opp').find('ul li:first-child');
    var lastEl = $('.slider_sustem_opp').find('ul li:last-child');
    var blockLength = $('.slide_content').length
    var activeInset = $('li.active_inset');
    var arrow = angular.element($event.target);

    if (arrow.is('.slider_arrow_left')) {
      if (firstEl.hasClass('active_inset')) {
        return false;
      }
      activeInset.removeClass('active_inset').prev().addClass('active_inset');
      var insetNumb = $('li.active_inset').attr('data-index');
      $('.slide_content').removeClass('show-slide');
      $('.slide_content').each(function () {
        if ($(this).attr('data-block-index') == insetNumb) {
          $(this).addClass('show-slide');
        }
      });
    }
    if (arrow.is('.slider_arrow_right')) {
      if (lastEl.hasClass('active_inset')) {
        return false;
      }
      activeInset.removeClass('active_inset').next().addClass('active_inset');
      var insetNumb = $('li.active_inset').attr('data-index');
      $('.slide_content').removeClass('show-slide');
      $('.slide_content').each(function () {
        if ($(this).attr('data-block-index') == insetNumb) {
          $(this).addClass('show-slide');
        }
      });
    }
  }
}