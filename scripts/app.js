var wogApp = angular.module('wogApp', ["ui.router", "ngTable", "wogApp.vidget", "wt.responsive"])

wogApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main")

  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "pages/main.html",
      controller: userMainCtrl
    })

  .state('company-departments', {
    url: "/company-departments",
    templateUrl: "pages/company-departments.html",
    controller: companyDepartments,
  })

  .state('transit', {
    url: "/transit",
    templateUrl: "pages/transit.html",
    controller: transitScoreCtrl,
  })


  .state('transit.score_settings', {
      url: "/score_settings",
      views: {
        'score_settings@transit': {
          templateUrl: "pages/transactions_pages/scores.html",
          controller: function ($scope, $rootScope) {
            $rootScope.title_second = '/ Налаштування рахунку';
            $('.score_settings_btn').addClass('active_transit_list').siblings().removeClass('active_transit_list');
          }
        },
      }
    })
    .state('transit.cards_transit', {
      url: "/cards_transit",
      views: {
        'cards_transit@transit': {
          templateUrl: "pages/transactions_pages/cards_transit.html",
          controller: function ($scope, $rootScope) {
            $rootScope.title_second = '/ Картки';
            $('.card_transit_btn').addClass('active_transit_list').siblings().removeClass('active_transit_list');
          }
        }
      }
    })
    .state('transit.transactions_transit', {
      url: "/transactions_transit",
      views: {
        'cards_transit@transit': {
          templateUrl: "pages/transactions_pages/transactions_transit.html",
          controller: function ($scope, $rootScope) {
            $rootScope.title_second = '/ Транзакції';
            $('.transactions_transit_btn').addClass('active_transit_list').siblings().removeClass('active_transit_list');
          }
        }
      }
    })


  .state('reports', {
    url: "/reports",
    templateUrl: "pages/reports.html",
    controller: function ($rootScope) {
      $rootScope.title = '/ Звіти';
      $rootScope.title_second ='';
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
      $rootScope.title_second ='';
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
      $rootScope.title_second ='';
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
      $rootScope.title_second ='';
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