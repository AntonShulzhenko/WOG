$(document).ready(function () {
  if ($('body').width() >= 993) {
    console.log(window.screen.width);
    $('.menu_tooltip').tooltipsy({
      offset: [5, 0],
      css: {
        'position': 'relative',
        'font-size': '12px',
        'left': '17px',
        'padding': '10px 20px',
        'max-width': '200px',
        'color': '#fff',
        'background-color': '#006940',
        'text-shadow': 'none',
        'border-radius': '5px',
      },
      className: 'menu_hover',
      show: function (e, $el) {
        $el.fadeIn(500);
      },
      hide: function (e, $el) {
        $el.fadeOut(300);
      }
    })

    
  }
});