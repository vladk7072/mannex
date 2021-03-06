$(function () {

  $(".header__burger-btn").on("click", function(){
    $(".header__menu").toggleClass("header__menu--active");
    $(".header__burger-btn").toggleClass("header__burger-btn--active");
    $("body").toggleClass("lock");
  });

  $(".category__bar-btn").on("click", function(){
    $(".category__bar").toggleClass("category__bar--active");
    $(".category__bar-btn").toggleClass("category__bar-btn--active");
  });

  $(".category__bar-item").on("click", function(){
    $(".category__bar").removeClass("category__bar--active");
    $(".category__bar-btn").removeClass("category__bar-btn--active");
  });

  const swiperTop = new Swiper(".top__content", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".top__btn-next",
      prevEl: ".top__btn-prev",
    },
  });

  var mySliderAllSlides = document.querySelector(".top__total"),
    mySliderCurrentSlides = document.querySelector(".top__current");

  mySliderAllSlides.innerHTML = "/0" + swiperTop.slides.length;

  swiperTop.on("slideChange", function () {
    var currentSlide = ++swiperTop.realIndex;
    mySliderCurrentSlides.innerHTML = "0" + currentSlide;
  });

  const title = document.querySelector(".about__title"),
    titleBg = document.querySelector(".about__title-bg");

  titleBg.innerHTML = title.innerHTML;

  const title2 = document.querySelector(".category__title"),
    titleBg2 = document.querySelector(".category__title-bg");

  titleBg2.innerHTML = title2.innerHTML;

  var mixer = mixitup(".category__items");
  
  const tripBar = document.querySelector(".category__bar");
  tripBar.addEventListener("click", (e) => {
    $(".category__bar-item--active").removeClass("category__bar-item--active");
    e.target.classList.add("category__bar-item--active");
  });

  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      900
    );
    return false;
  });
});
