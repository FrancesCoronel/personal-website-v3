const goTopBtn = document.querySelector(".return-to-top");

const trackScroll = () => {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("show");
  }
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
};

if (goTopBtn) {
  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
}
