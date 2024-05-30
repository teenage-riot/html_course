// Make sure that the dom is ready
$(function () {

  // video

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // rating

  $(".header__atop-rating-rateYo").rateYo({
    rating: 4.5,
    halfStar: true,
    spacing: "10px",
    starWidth: "30px",
    normalFill: "#d7d1c7",
    ratedFill: "#ffb648",
    starSvg: '<svg width="27" height="27" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M11.36 0.82L9.07 5.03C8.64 5.82 7.87 6.37 6.99 6.54L2.28 7.42C-0.05 7.86 -0.98 10.7 0.66 12.43L3.94 15.91C4.56 16.56 4.85 17.46 4.74 18.36L4.12 23.1C3.82 25.46 6.24 27.22 8.38 26.2L12.71 24.15C13.52 23.76 14.47 23.76 15.28 24.15L19.61 26.2C21.75 27.22 24.17 25.46 23.87 23.1L23.25 18.36C23.14 17.46 23.43 16.56 24.05 15.91L27.33 12.43C28.97 10.7 28.04 7.86 25.71 7.42L21 6.54C20.12 6.37 19.35 5.82 18.92 5.03L16.63 0.82C15.49 -1.26 12.5 -1.26 11.36 0.82Z"/>' +
      '</svg>',
  });


  // blog

  var mixer = mixitup('.blog__list');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active');
    $(this).addClass('blog__filter-btn--active');
  })


  // slider

  $('.customers__slider').slick({
    appendDots: $('.customer__slider-dots'),
    arrows: false,
    dots: true,
    draggable: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  })

  $('.customers__arrow-prev').on('click', function () {
    $('.customers__slider').slick('slickPrev');
  })

  $('.customers__arrow-next').on('click', function () {
    $('.customers__slider').slick('slickNext');
  })


  // accordeon

  // 1st ver:
  // $('.faq__acc-item').on('click', function() {
  //   $(this).toggleClass('faq__acc-item--active');
  //   $(this).children('.faq__acc-text').slideToggle();
  // })

  //2nd ver:
  $('.faq__acc-item').on('click', function () {
    if ($(this).hasClass('faq__acc-item--active')) {
      $(this).toggleClass('faq__acc-item--active');
      $(this).children('.faq__acc-text').slideUp();
    } else {
      $('.faq__acc-item').removeClass('faq__acc-item--active');
      $('.faq__acc-item').children('.faq__acc-text').slideUp();
      $(this).toggleClass('faq__acc-item--active');
      $(this).children('.faq__acc-text').slideDown();
    }
  })

  
  // map

  initMap();

  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [-122.446913, 37.759351],

          // Уровень масштабирования
          zoom: 12,
        }
      }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
  }


});
