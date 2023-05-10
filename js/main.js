window.onload = function () {
  // header sitemap click event
  let body = document.querySelector("body");
  let header = document.querySelector(".header");
  let sitemapBtn = document.querySelector(
    ".header .bottom .nav .left .sitemap-btn"
  );
  let sitemapBgc = document.querySelector(".sitemap-bgc");
  let mbSitemap = document.querySelector(".m-sitemap-list-container");
  let mbSitemapClosed = document.querySelector(".m-closed-btn");

  sitemapBtn.addEventListener("click", function () {
    body.classList.toggle("active");
    header.classList.toggle("active");
    sitemapBgc.classList.toggle("active");
    mbSitemap.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (!header.contains(e.target)) {
      body.classList.remove("active");
      header.classList.remove("active");
      sitemapBgc.classList.remove("active");
    }
  });
  mbSitemapClosed.addEventListener("click", function () {
    mbSitemap.classList.remove("active");
  });
  // visual swiper slide
  let visualSwiper = new Swiper(".v-swiper", {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".v-pg",
      type: "fraction",
    },
    navigation: {
      nextEl: ".v-next",
      prevEl: ".v-prev",
    },
  });
  //recommend swiper slide
  let recommendSwiper = new Swiper(".recommend-gallery", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 15,
        grid: {
          rows: 2,
          fill: "row",
        },
        freeMode: false,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
        freeMode: false,
      },
    },
  });
  // ranking-swiper
  let rankingSwiper = new Swiper(".rank-swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {      
      800: {
        slidesPerView: 3,
        spaceBetween: 15,
        freeMode: true,
      },
    },
  });
  // keyword swiper
  new Swiper(".sw-keyword", {
    slidesPerView: "auto",
    speed: 600,
    loop: false,
    allowTouchMove: true,
    spaceBetween: 0,
  });
};
