wogApp.factory('widgetControlService', function () {
  return {
    createStorage: function () {
      if (localStorage.settings_widget == undefined) {
//        console.log('storage created');
        var widgetState = [
          {
            'widgetName': 'card_operations',
            'opened': true,
            'minimized': false,
        }, {
            'widgetName': 'last_trns',
            'opened': true,
            'minimized': false,
        }, {
            'widgetName': 'used_res',
            'opened': true,
            'minimized': false,
        }, {
            'widgetName': 'money_passd',
            'opened': true,
            'minimized': false,
        }, {
            'widgetName': 'resourses',
            'opened': true,
            'minimized': false,
        }, {
            'widgetName': 'messages_users',
            'opened': true,
            'minimized': false,
        }
      ];
        var settings = JSON.stringify({
          'settings': widgetState
        })
        localStorage.setItem("settings_widget", settings);

      }
    },
    checkStorage: function (item_name, btn) {
//      console.log('checking storage..');
      var localData = JSON.parse(localStorage.getItem("settings_widget"));
      for (i in localData) {
        for (j in localData[i]) {
          if (localData[i][j].widgetName == item_name && btn == 'minimize') {
            if (localData[i][j].minimized) {
              localData[i][j].minimized = false;
            } else {
              localData[i][j].minimized = true;
            }
          }
          if (localData[i][j].widgetName == item_name && btn == 'close') {
            if (localData[i][j].opened) {
              localData[i][j].opened = false;
            } else {
              localData[i][j].opened = true;
            }
          }
        }
      }
      localStorage.clear();
      localStorage.setItem('settings_widget', JSON.stringify(localData));
    },
    checkReloadStorage: function (w_name) {
//      console.log('reload storage');
      var localStorageData = JSON.parse(localStorage.getItem("settings_widget"));
      for (i in localStorageData) {
        for (j in localStorageData[i]) {
          if (w_name != undefined) {
            if (localStorageData[i][j].opened == false && localStorageData[i][j].widgetName == w_name) {
              this.addToStash(localStorageData[i][j].widgetName);
            }
            if (localStorageData[i][j].opened == true && localStorageData[i][j].widgetName == w_name) {
              this.removeFromStash(localStorageData[i][j].widgetName);
            }
          } else {
            if (localStorageData[i][j].opened == false) {
              this.addToStash(localStorageData[i][j].widgetName);
            }
            if (localStorageData[i][j].opened == true) {
              this.removeFromStash(localStorageData[i][j].widgetName);
            }
          }
          if (w_name != undefined) {
            if (localStorageData[i][j].minimized == true && localStorageData[i][j].widgetName == w_name) {
              this.hideElement(localStorageData[i][j].widgetName);
            }
            if ((localStorageData[i][j].minimized == false && localStorageData[i][j].widgetName == w_name)) {
              this.showElement(localStorageData[i][j].widgetName);
            }
          } else {
            if (localStorageData[i][j].minimized == true) {
              this.hideElement(localStorageData[i][j].widgetName);
            }
            if (localStorageData[i][j].minimized == false) {
              this.showElement(localStorageData[i][j].widgetName);
            }
          }
        }
      }
    },
    hideElement: function (el_id) {
      $('[data-widget-id]').each(function () {
        if ($(this).attr('data-widget-id') == el_id) {
          $(this).closest('.vidget').addClass('hide_to_head');
        }
      });
    },
    showElement: function (el_id) {
      $('[data-widget-id]').each(function () {
        if ($(this).attr('data-widget-id') == el_id) {
          $(this).closest('.vidget').removeClass('hide_to_head');
        }
      });
    },
    removeFromStash: function (el_id) {
//      console.log('try remove...');
      $('.w_min').parent().each(function () {
        if ($(this).attr('data-w-min-id') == el_id) {
//          console.log(true);
          $(this).attr('data-w-min-id', '').removeClass('stash_widget');
          $('[data-widget-id=' + el_id + ']').parent().removeClass('to_stash');
        }
      });
    },
    addToStash: function (el_id) {
      $('[data-widget-id]').each(function () {
        if ($(this).attr('data-widget-id') == el_id) {
          $(this).closest('.vidget').addClass('to_stash');
          $('.' + el_id).attr('data-w-min-id', el_id).addClass('stash_widget');
        }
      });
    }
  }
});