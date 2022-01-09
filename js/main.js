const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
// ----------------------------
const header = $$(".header");

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
