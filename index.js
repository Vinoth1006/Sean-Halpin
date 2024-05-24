let lastScrollTop = 0;
let header = document.querySelector('.header');

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 120) {
    // Scroll down, hide header
    header.classList.add("hide");
  } else {
    // Scroll up, show header
    header.classList.remove("hide");
  }

  if (currentScroll <= 0) {
    // Reached top, remove fixed class and revert to original background color
    header.classList.remove("fixed");
    header.style.backgroundColor = '#E0EBE8'; // Revert to original background color
  } else {
    // Not at top, add fixed class
    header.classList.add("fixed");
    header.style.backgroundColor = '#fff';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("ul li a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Remove the active class from all links
            links.forEach(function (link) {
                link.classList.remove("active");
            });

            // Add the active class to the clicked link
            this.classList.add("active");
        });
    });
});
