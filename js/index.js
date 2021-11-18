window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.add('burger__menu_open')
  })

  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.remove('burger__menu_open')
  })

  document.querySelector(".header__search-button").addEventListener("click", function() {
    document.querySelector(".header__search").classList.add("search-active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__search");
    if (!target.closest(".header__search-container")) {
    form.classList.remove("search-active");
      form.querySelector("input").value = "";
    }
  })

  document.querySelector(".header__search-close").addEventListener("click", function() {
    document.querySelector(".header__search").classList.remove("search-active");
  })

  document.querySelectorAll(".hero__select-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".hero__select-dropdown");

      document.querySelectorAll(".hero__select-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("btn-active");
        }
      });

      document.querySelectorAll(".hero__select-dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("select-active");
        }
      })
      dropdown.classList.toggle("select-active");
      btn.classList.toggle("btn-active")
    });
  });

    document.addEventListener("click", function(e) {
      let target = e.target;
      if (!target.closest(".hero__select-block")) {
        document.querySelectorAll(".hero__select-dropdown").forEach(el => {
            el.classList.remove("select-active");
        })
        document.querySelectorAll(".hero__select-btn").forEach(el => {
            el.classList.remove("btn-active");
        });
    }
  });

  const swiper1 = new Swiper('.galery__swiper', {
    // Optional parameters
    longSwipesMs: 10,
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      fill: 'column',
      rows: 2,
    },
    spaceBetween: 50,

    a11y: {
      enabled: true,
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
      nextSlideMessage: 'Показать следующий слайд',
      prevSlideMessage: 'Показать предыдущий слайд',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          fill: 'row',
          rows: 1
        },
        spaceBetween: 0
      },

      577: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1025: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      },

      1441: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination-gal',
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gal-swiper-button-next',
      prevEl: '.gal-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: false,
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    longSwipesMs: 10,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
      delay: 5000,
    },
  });

  const elementSel = document.querySelector('#gal-sel');
  const choices = new Choices(elementSel, {
    searchEnabled: false,
  });

  $( function() {
    $( "#accordion-ita" ).accordion({
      active: 0,
      heightStyle: "content",
    });
  });

  $( function() {
    $( "#accordion-fra" ).accordion({
      active: 0,
      heightStyle: "content",
    });
  });

  $( function() {
    $( "#accordion-ger" ).accordion({
      active: 0,
      heightStyle: "content",
    });
  });

  $( function() {
    $( "#accordion-rus" ).accordion({
      active: 0,
      heightStyle: "content",
    });
  });

  $( function() {
    $( "#accordion-bel" ).accordion({
      active: 0,
      heightStyle: "content",
    });
  });

  document.querySelectorAll('.catalog__tabs-item').forEach(function(catBtn) {
    catBtn.addEventListener('click', function (eventCat) {
      document.querySelectorAll('.catalog__tabs-item').forEach(function(catBtn) {
        catBtn.classList.remove('btn_active')
      })
      eventCat.currentTarget.classList.add('btn_active')

      const path = eventCat.currentTarget.dataset.path

      document.querySelectorAll('.catalog__bio').forEach(function(catBio) {
        catBio.classList.remove('catalog__bio_active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bio_active');
    });
  });

  document.querySelectorAll('.accordion-name').forEach(function(catName) {
    catName.addEventListener('click', function (eventName) {
      document.querySelectorAll('.accordion-name').forEach(function(catName) {
        catName.classList.remove('name_active')
      })
      eventName.currentTarget.classList.add('name_active')

      const path = eventName.currentTarget.dataset.path

      document.querySelectorAll('.catalog__profile-ita').forEach(function(catBio) {
        catBio.classList.remove('catalog__profile-ita_active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__profile-ita_active');
    });
  });

  document.querySelector('.events__more').addEventListener('click', function() {
    document.querySelector('.events__list').classList.add('events__list_visible')
  });

  document.querySelector('.events__more').addEventListener('click', function() {
    document.querySelector('.events__more').classList.add('events__more-none')
  });

  const elements = document.querySelectorAll('[data-mask="number"]')
  if (!elements) return
  const numberMask = {
    mask: Number,
    scale: 0,
    signed: false,
    thousandsSeparator: ' ',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ',',
    mapToRadix: ['.'],
    min: 0,
    max: 25000
  }
  elements.forEach(el => {
    IMask(el, numberMask)
  })

  const swiper3 = new Swiper('.editions__swiper', {
    // Optional parameters
    longSwipesMs: 10,
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,

    spaceBetween: 50,

    a11y: {
      enabled: true,
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
      nextSlideMessage: 'Показать следующий слайд',
      prevSlideMessage: 'Показать предыдущий слайд',
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
        slidesPerGroup: 1,

        spaceBetween: 15
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,

        spaceBetween: 50
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination-edi',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.edi-swiper-button-next',
      prevEl: '.edi-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: false,
  });

  document.querySelector('.projects__tooltip').addEventListener('click', function() {
    document.querySelector('.projects__tooltip').classList.toggle('projects__tooltip_close');
    document.querySelector('.projects__tooltip-description').classList.toggle('projects__tooltip-description_active');
  });

  const swiper4 = new Swiper('.projects__swiper', {
    // Optional parameters
    longSwipesMs: 10,
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,

    spaceBetween: 50,

    a11y: {
      enabled: true,
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
      nextSlideMessage: 'Показать следующий слайд',
      prevSlideMessage: 'Показать предыдущий слайд',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,

        spaceBetween: 0
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,

        spaceBetween: 34
      },

      1700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination-edi',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.pro-swiper-button-next',
      prevEl: '.pro-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: false,
  });

  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76255452757675,37.610505857055585],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14
      });

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.758508205172845,37.60109269952379] // координаты точки
        }
    });

    var myPlacemark = new ymaps.Placemark([55.75833881022384,37.60104978417955], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-map-pin.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -6]
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        top: "270px",
        right: "15px",
      }
    },
});

  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        top: "350px",
        right: "15px",
      },
    },
  });


    // Размещение геообъекта на карте.
    myMap.controls.add(geolocationControl);
    myMap.controls.add(zoomControl);
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('button');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    /* myMap.geoObjects.add(myGeoObject); */
  };

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.Inputmask.unmaskedvalue()
          return Nomber(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: {
        required: 'Укажите ваше имя',
        minLength: 'Поле должно содержать не менее 2-х символов',
      },
      tel: 'Укажите ваш телефон',
    },
  });

  const swiperEvent = new Swiper('.events__swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,

        spaceBetween: 0
      },

      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,

        spaceBetween: 34
      },

      1700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    },



    // If we need pagination
    pagination: {
      el: '.events-swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.events-swiper-button-next',
      prevEl: '.events-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


});

document.addEventListener("DOMContentLoaded", function(event) {
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = document.querySelector('body').offsetWidth;
  if (widthWind <= 576) {
    document.querySelector('.editions__mobile-checkbox-close').addEventListener('click', function () {
      document.querySelector('.editions__mobile-checkbox').removeAttribute('checked');
    });

    document.querySelector('.editions__mobile-head').addEventListener('click', function() {
      document.querySelector('.editions__mobile-head').classList.toggle('editions__mobile-head_active');
    });

    let button = ".editions__mobile-head";
  let labels = ".editions__mobile-checkbox-label";
  let labelsList = ".editions__mobile-checkbox-list";
  let labelsListActive = "checklist-active";
  let labelActive = "editions__mobile-checkbox-label_active";
  let animationClass = "animation-checkbox";
  let inputCheckbox = ".editions__mobile-checkbox";

  function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
    let btn = document.querySelector(a);
    let labels = document.querySelectorAll(b);
    let listLabels = document.querySelector(c);
  btn.addEventListener("click", toggleSpoiler);
    btn.addEventListener("keyup", function(e) {
      console.log(e.key);
      if (e.code === "Enter") {
        toggleSpoiler();
      }
    })
  function toggleSpoiler() {
      if (!listLabels.classList.contains(labelsListActive)) {
      listLabels.classList.add(labelsListActive);
      labels.forEach(item => {
       // item.classList.add("checkbox--label-active");
        animationItem(item, labelActive, animationClass, "add");
      })
    } else {
      listLabels.classList.remove(labelsListActive);
      labels.forEach(item => {
        if (item.querySelector(inputCheckbox).checked) {
        animationItem(item, labelActive, animationClass, "add");
        } else {
          animationItem(item, labelActive, animationClass, "remove");
        }
        });
    }
    labels.forEach(item => {
      item.addEventListener("click", function() {
        if (!listLabels.classList.contains(labelsListActive)) {
          animationItem(this, labelActive, animationClass, "remove");
        }
      });
    })
  }
  function animationItem(item, class1, class2, f) {
   if (f === "add") {
      item.classList.add(class1);
    setTimeout(function() {
      item.classList.add(class2)
    }, 100);

   } else {
       item.classList.remove(class2);
    setTimeout(function() {
      item.classList.remove(class1)
    }, 300);
    }
  }
  }
  checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);
  }
});
