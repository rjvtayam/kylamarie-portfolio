// Home Section Starts
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");
var menuLinks = document.querySelectorAll(".nav-links li a:not(.home)"); 
menuBtn.addEventListener("click", activeClass);

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    menuLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

menuLinks.forEach(link => {
  link.addEventListener("click", menuItemClicked);
});

function menuItemClicked(event) {
  event.preventDefault();
  menuLinks.forEach(link => link.classList.remove("active"));
  this.classList.add("active");
  menuBtn.classList.remove("active");
  menu.classList.remove("active");

  var targetId = this.getAttribute("href");
  var targetSection = document.querySelector(targetId);
  var targetTop = targetSection.offsetTop - 50; // adjust the offset as needed

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}
// Home Section Ends

// Portfolio Section Starts
var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});

// magnific popup
$(".gallery").magnificPopup({
  delegate: ".overlay a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
// Portfolio Section Ends

// Certification Section Starts
var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

// magnific popup
$(".certificate-gallery").magnificPopup({
  delegate: ".overlay a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
// Certification Section Ends

// Testimonials Section Starts
$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000, // changed from autoplayTime to autoplayTimeout
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});
// Testimonials Section Ends


// Download CV ends
const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  const cvUrl = 'cv.pdf'; // URL of the CV file
  const link = document.createElement('a');
  link.href = cvUrl;
  link.target = '_blank'; // Open in a new tab
  link.rel = 'noopener noreferrer'; // Security attributes
  link.click();
});
// Download CV ends
