document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link, #login-redirect, #signup-redirect");
    const pages = document.querySelectorAll(".page");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
  
        pages.forEach(function (page) {
          page.style.display = "none";
        });
  
        document.getElementById(targetId).style.display = "block";
      });
    });
  });
  