angular.module('wogApp.vidget', [])
  .controller('vidgetCtrl', function ($scope, $compile) {



    $.ajax({
      url: 'scripts/lib/dragula.js',
      cashe: true,
      success: function () {
        addDrag();
        console.log('DRAGULA')
      }
    })

    function addDrag() {
      dragula([document.querySelector('.dragme')], {
        moves: function (el, container, handle) {
          return handle.className === 'darg_on_me';
        }
      })
    }

    if ($('body').width() > 767) {
      $('.darg_on_me').tooltipsy({
        offset: [0, -16],
        css: {
          'position': 'relative',
          'font-size': '12px',
          'left': '-38px',
          'padding': '10px 20px',
          'width': '230px',
          'color': '#fff',
          'background-color': 'rgba(0,0,0,0.5)',
          'text-shadow': 'none',
          'border-radius': '5px',
          'z-index': '8',
          'text-align': 'center'
        },
        className: 'drag_tooltip',
        show: function (e, $el) {
          $el.fadeIn(500);
        },
        hide: function (e, $el) {
          $el.fadeOut(300);
        }
      })
    }

    $('.hide_vidget').on('click', function () {
      $(this).closest('.vidget').toggleClass('hide_to_head');
    });

    $('.close_vidget').on('click', function () {
      $(this).closest('.vidget').fadeOut();
    });

    $('.card_control_panel ul li:first-child').on('click', function () {
      $(this).parent().toggleClass('open_table_panel');
    })

  })

.directive('vidgetControlPanel', function ($compile) {
  return {
    restrict: 'E',
    scope: {
      content: '@'
    },
    template: '<div class="vidget_control_panel">' + '<span class="hide_vidget">_</span><span class="darg_on_me" data-title="Перетяніть для зміни положення">...</span><span class="close_vidget">×</span>' + '</div>'
  }
})

.directive('cardControlPanel', function () {
  return {
    restrict: 'E',
    scope: {
      content: '@'
    },
    template: '<div class="card_control_panel">' +
      '<ul>' +
      '<li><a href="#"> Змінити: </a></li>' +
      '<li><a href="#"> Статус </a></li>' +
      '<li><a href="#"> Ресурси </a></li>' +
      '<li><a href="#"> Послуги </a></li>' +
      '<li><a href="#"> Термінали  </a></li>' +
      '<li><a href="#"> Інше  </a></li>' + '</ul>' + '</div>'
  }
});