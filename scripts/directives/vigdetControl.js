angular.module('myApp.say', [])
    .directive('sayPidar', function () {
        return {
            restrict: 'E',
            scope:{
                content:'@'
            },
            template: '<span>...</span><span>|_|</span><span></span>'

        }
    })