var wogApp = angular.module('wogApp', ["ui.router"])

wogApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main")

  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "pages/main.html",
      controller: function ($rootScope) {
        $rootScope.title = '/ Кабінет користувача';
        $rootScope.page_img = 'main';
        angular.element($('.nav_list li')).removeClass('active');
        angular.element($('.main')).addClass('active');

      }
    })

  .state('company-departments', {
    url: "/company-departments",
    templateUrl: "pages/company-departments.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Підрозділи компанії';
      $rootScope.page_img = 'company-departments';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.company-departments')).addClass('active');
    }
  })

  .state('transit', {
    url: "/transit",
    templateUrl: "pages/transit.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Транзитний рахунок';
      $rootScope.page_img = 'transit';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.transit')).addClass('active');
    }
  })

  .state('reports', {
    url: "/reports",
    templateUrl: "pages/reports.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Звіти';
      $rootScope.page_img = 'reports';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.reports')).addClass('active');
    }
  })

  .state('terminal', {
    url: "/terminal",
    templateUrl: "pages/terminal.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Термінальна мережа';
      $rootScope.page_img = 'terminal';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.terminal')).addClass('active');
    }
  })

  .state('company-control', {
    url: "/company-control",
    templateUrl: "pages/company-control.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Управління компаніями';
      $rootScope.page_img = 'company-control';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.company-control')).addClass('active');
    }
  })

  .state('settings', {
    url: "/settings",
    templateUrl: "pages/settings.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Налаштування';
      $rootScope.page_img = 'settings';
      angular.element($('.nav_list li')).removeClass('active');
      angular.element($('.settings')).addClass('active');
    }
  })

  .state('opportunities', {
    url: "/opportunities",
    templateUrl: "pages/opportunities.html",
    controller: sustemOppCtrl
  })


})