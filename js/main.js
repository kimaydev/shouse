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
  mbSitemapClosed.addEventListener("click", function(){
    mbSitemap.classList.remove("active"); 
  });
  // visual swiper slide
  var swiper = new Swiper(".v-swiper", {
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
};
