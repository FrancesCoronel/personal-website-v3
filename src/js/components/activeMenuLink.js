const links = document.querySelectorAll(".menu-item a");
const currentUrl = location.href;

for (const link of links) {
  if (link.href === currentUrl) {
    link.classList.add("active");
  }
}
