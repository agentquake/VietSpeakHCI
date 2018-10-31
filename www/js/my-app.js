// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes: [
    {
      path: '/',
      url: './index.html',
      // routes: [{
      //   path: 'detail/',
      //   url: './pages/lesson-detail.html'
      // }]
    },
    {
      path: '/detail/',
      url: './pages/lesson-detail.html',
      on: {
        pageAfterIn: function test(e, page) {
          $(document).ready(function () {
            $('.owl-1').owlCarousel({
              items: 1,
              loop: true,
              dots: false,
              nav: false,
              autoHeight: true,
              margin: -8,
              smartSpeed: 1000,
              stagePadding: 17
            });
            $('.owl-1').on('dragged.owl.carousel', function (e) {
              $('.owl-item.active,owl-item.cloned').addClass('hihi');
              if ($('.owl-item.hihi').length) {
                $('.owl-item.hihi').siblings().removeClass('hihi').css('opacity', '0.3');
              }
            })
          });

        }
      },
      routes: [{
        path: 'section/',
        url: './pages/section.html',
        on: {
          pageAfterIn: function test(e, page) {
            $(document).ready(function () {
              $('.next').css('opacity', '0');
              $('.micro-button').on('click', function () {
                $(this).toggleClass('hehe');
                if ($('.micro-button.hehe').length) {
                  $('.next').css('opacity', '0');
                } else {
                  $('.next').css('opacity', '1');
                  $('.word').css('color', '#56ff54');
                  $('.checked').css('color', 'red');
                }
              });

              $('.volume').on('click', function () {
                $(this).toggleClass('changevolume');
              });
            });
          }
        },
        routes: [{
          path: 'detail/',
          url: './pages/dictionary-detail.html'
        }]
      }]
    },
    {
      path: '/dictionary/',
      url: './pages/dictionary.html',
      routes: [{
        path: 'detail/',
        url: './pages/dictionary-detail.html'
      }]
    },
    {
      path: '/settings/',
      url: './pages/setting.html'
    }
  ]
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-dictionary', {
  url: '/dictionary/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

var panel = app.panel.create({
  el: '.panel-right',
})

var range = app.range.create({
  el: '.range-slider'
});

var probar1 = app.progressbar.show('.pro-bar1', 20, 'green');

var probar2 = app.progressbar.show('.pro-bar2', 30, 'green');

var probar3 = app.progressbar.show('.pro-bar3', 40, 'green');

var probar4 = app.progressbar.show('.pro-bar4', 50, 'green');

var probar4 = app.progressbar.show('.pro-bar5', 5, 'green');



// var searchbar = app.searchbar.create({
//     el: '.searchbar',
//     searchContainer: '.list',
//     searchIn: '.item-title',
//     on: {
//         search(sb, query, previousQuery) {
//             console.log(query, previousQuery);
//         }
//     }
// });