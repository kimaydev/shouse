window.onload = function(){
    // header sitemap click event
    let body = document.querySelector("body");
    let header = document.querySelector(".header");
    let sitemapBtn = document.querySelector(".header .bottom .nav .left .sitemap-btn");
    let sitemapBgc = document.querySelector(".sitemap-bgc");

    sitemapBtn.addEventListener("click", function(){
        body.classList.toggle("active");
        header.classList.toggle("active");
        sitemapBgc.classList.toggle("active");
    });
    document.addEventListener("click", function(e){
        if(!header.contains(e.target)){
            body.classList.remove("active");
            header.classList.remove("active");
            sitemapBgc.classList.remove("active");
        }
    });
}