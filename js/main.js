const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
// ----------------------------
const header = $$(".header");
const btnBackTop = $$(".back");

function handleChangeHeaderWhenScrolled() {
  if (!header) return;
  window.onscroll = function () {
    const positonHeader = window.pageYOffset;
    if (positonHeader !== 0) {
      header.style.top = 0;
      header.style.backgroundColor = "#fff";
      header.style.transition = "all .2s linear";
      header.style.boxShadow = "0  1px 2px #ccc";
    } else {
      header.style.top = "25px";
      header.style.backgroundColor = "transparent";
      header.style.transition = "all .2s linear";
      header.style.boxShadow = "none";
    }
  };
}

(() => {
  handleChangeHeaderWhenScrolled();
})();

$(document).ready(function () {
  $(".activity-slider").slick({
    slidesToShow: 2,
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(".responsive").slick({
  slidesToShow: 2,
  centerMode: true,
  centerPadding: "40px",
  infinite: true,
  speed: 800,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 952,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "60px",
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
