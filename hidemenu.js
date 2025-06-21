
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");

  function closeNavbar() {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        navbarCollapse.classList.remove("show");
      }
    }
  }

  // Close navbar when clicking outside nav or toggler
  document.addEventListener("click", function (event) {
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
      closeNavbar();
    }
  });

  // Close navbar on scroll
  window.addEventListener("scroll", function () {
    closeNavbar();
  });
});
