angular.module('wogApp.vidget', [])
    .directive('addVidget', function () {
        return {
            restrict: 'E',
            scope:{
                content:'@'
            },
            template: '<div class="vidget_control_panel">' + '<span>_</span><span>...</span><span>×</span>' + '</div>'

        }
    })