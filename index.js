
//Navbar
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");

   if (window.scrollY>80 ) {
    navbar.classList.add("nav-shadow");
    } else {

      navbar.classList.remove("nav-shadow");
    }
  });
  // Navbar toggle
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function() {
      navbar.classList.add("nav-shadow");
    });
  });

  // Swiper
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 120
      }
    }
  });
  function aos_init() {
    AOS.init({
     
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
  function dropdown() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function dropdown1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("read-more1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more"; 
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less"; 
      moreText1.style.display = "inline";
     
    }
  }


