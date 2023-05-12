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
      mbSitemap.classList.remove("active");
    }
  });
  mbSitemapClosed.addEventListener("click", function () {
    body.classList.remove("active");
    header.classList.remove("active");
    sitemapBgc.classList.remove("active");
    mbSitemap.classList.remove("active");
  });
  mbSitemap.addEventListener("click", function (e) {
    e.stopPropagation();
    // event stop
  });
  // header mobile sitemap tabmenu
  let mbTabBtn = document.querySelectorAll(".m-tab-box .m-tab-btn > li");
  let mbTabList = document.querySelectorAll(".m-tab-box .m-tab-list");
  mbTabBtn.forEach((tabBtn, idx) => {
    tabBtn.addEventListener("click", function () {
      mbTabList.forEach((list) => {
        list.classList.remove("on");
      });
      mbTabBtn.forEach((btn) => {
        btn.classList.remove("on");
      });
      mbTabBtn[idx].classList.add("on");
      mbTabList[idx].classList.add("on");
    });
  });
  // header mobile sitemap accordion action
  // let mbListMenu = document.querySelector(".m-tab-list .list-menu");
  // let i;
  // mbListMenu.addEventListener("click", function(){
  //   mbListMenu.classList.toggle("on");
  // });
  // let mbListSubMenu = document.querySelectorAll(".m-tab-list .list-submenu");
  // for(i = 0; i < mbListMenu; i++){
  //   mbListMenu[i].addEventListener("click", function(){
  //     mbListMenu.classList.toggle("on");
  //   });
  // }

  // fix quick menu scroll top
  const goTop = document.querySelector(".fix-quick-menu .top-btn");
  const scrollElement =
    window.document.scrollingElement ||
    window.document.body ||
    window.document.documentElement;
  goTop.addEventListener("click", function () {
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  });
  // fix quick menu scroll fade
  let fixQuickMenu = document.querySelector(".fix-quick-menu");
  let scrollFunction = function () {
    if (window.scrollY <= 0) {
      fixQuickMenu.classList.remove("active");
    } else {
      fixQuickMenu.classList.add("active");
    }
  };
  let aaaFunction = function () {
    console.log(123);
  };
  // document.addEventListener("scroll", scrollFunction);
  // window.addEventListener("resize", aaaFunction);
  // window.addEventListener("load", aaaFunction);

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

  // keyword swiper
new Swiper(".sw-keyword", {
  slidesPerView: "auto",
  speed: 600,
  loop: false,
  allowTouchMove: true,
  spaceBetween: 0, 
});
// guide slide
new Swiper(".sw-guide", {
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // 화면의 넓이가 640px 이상일 때
    768: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
})

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