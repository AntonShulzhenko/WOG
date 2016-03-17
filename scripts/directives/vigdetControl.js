angular.module('wogApp.vidget', [])
  .controller('vidgetCtrl', function ($scope, $compile) {
    $('.close_vidget').on('click', function () {
      $(this).closest('.vidget').fadeOut();
    });
  
    $.ajax({
      url: 'scripts/lib/dragula.js',
      cashe: 'true',
      success: function () {
        console.log('DRAGULA')
        dragula([document.querySelector('.dragme')], {
          moves: function (el, container, handle) {
            return handle.className === 'darg_on_me';
          }
        });
      }
    })
    
    $('.hide_vidget').on('click', function(){
      $(this).closest('.vidget').toggleClass('hide_to_head');
    });
  })
  .directive('vidgetControlPanel', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        content: '@'
      },
      template: '<div class="vidget_control_panel">' + '<span class="hide_vidget">_</span><span class="darg_on_me">...</span><span class="close_vidget">×</span>' + '</div>'
    }
  })